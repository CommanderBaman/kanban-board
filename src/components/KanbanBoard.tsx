import CardColumn, { CardColumnProps } from './CardColumn';
import { GroupingOption, SortingOption, Ticket, User } from '../utils/types';
import {
  LOCALSTORAGE_KEY_GROUPING,
  LOCALSTORAGE_KEY_SORTING,
  PRIORITY_NUM_TO_WORD,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  TAG_COLORS,
} from '../utils/constants';
import React, { useEffect, useState } from 'react';

import styles from '../styles/components/KanbanBoard.module.css';

const DEFAULT_GROUPING_OPTION = 'Status';
const DEFAULT_SORTING_OPTION = 'Title';

type KanbanBoardProps = {
  data: any;
};

function KanbanBoard(props: KanbanBoardProps) {
  // column data
  const [columns, setColumns] = useState([] as CardColumnProps[]);

  // inputs
  const [groupingOption, setGroupingOption] = useState(
    (localStorage.getItem(LOCALSTORAGE_KEY_GROUPING) ??
      DEFAULT_GROUPING_OPTION) as GroupingOption
  );
  const [sortingOption, setSortingOption] = useState(
    (localStorage.getItem(LOCALSTORAGE_KEY_SORTING) ??
      DEFAULT_SORTING_OPTION) as SortingOption
  );

  const onGroupingOptionSelect = (e: any) => {
    localStorage.setItem(LOCALSTORAGE_KEY_GROUPING, e.target.value);
    setGroupingOption(e.target.value);
  };
  const onSortingOptionSelect = (e: any) => {
    localStorage.setItem(LOCALSTORAGE_KEY_SORTING, e.target.value);
    setSortingOption(e.target.value);
  };

  const makeSortFunction = (sortingOption: SortingOption) => {
    switch (sortingOption) {
      case 'Priority':
        return (card1: Ticket, card2: Ticket) =>
          // higher priority comes first => descending order
          card2.priority - card1.priority;
      default:
      case 'Title':
        return (card1: Ticket, card2: Ticket) =>
          card1.title > card2.title ? 1 : -1;
    }
  };
  const makeColumns = (
    tickets: Ticket[],
    users: User[],
    groupingOption: GroupingOption,
    sortingOption: SortingOption
  ): CardColumnProps[] => {
    let result: CardColumnProps[];
    // get all tags and assign colors
    let tags: string[] = [];
    tickets.forEach((ticket) => {
      ticket.tag.forEach((t) => tags.push(t.toLowerCase()));
    });
    tags = tags.filter((item, i, ar) => ar.indexOf(item) === i);
    const tagColorDictionary = {} as any;
    tags.forEach((tag, index) => {
      tagColorDictionary[tag] = TAG_COLORS[index % tags.length];
    });

    // decide on sorting function
    const sortingFunction = makeSortFunction(sortingOption);

    // group according to option
    switch (groupingOption) {
      case 'Priority':
        result = PRIORITY_OPTIONS.map((priority) => {
          return {
            columnTitle: priority,
            cards: tickets
              .filter(
                (card) => PRIORITY_NUM_TO_WORD[card.priority] === priority
              )
              .sort(sortingFunction),
            tagColorDictionary,
          };
        });
        break;
      case 'Status':
        result = STATUS_OPTIONS.map((status) => {
          return {
            columnTitle: status,
            cards: tickets
              .filter((card) => card.status === status)
              .sort(sortingFunction),
            tagColorDictionary,
          };
        });
        break;
      case 'Users':
        result = users.map((user) => {
          return {
            columnTitle: user.name,
            cards: tickets
              .filter((card) => card.userId === user.id)
              .sort(sortingFunction),
            isUserBased: true,
            tagColorDictionary,
          };
        });
        break;
      default:
        result = [];
        break;
    }
    return result;
  };

  useEffect(() => {
    setColumns(
      makeColumns(
        props.data.tickets,
        props.data.users,
        groupingOption,
        sortingOption
      )
    );
  }, [groupingOption, sortingOption]);

  return (
    <div className={styles.kanbanBoard}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerForm}>
            <div className={styles.headerFormPicker}>
              <label
                className={styles.headerFormLabel}
                htmlFor='grouping-option'
              >
                Grouping
              </label>
              <select
                className={styles.headerFormSelect}
                value={groupingOption}
                onChange={onGroupingOptionSelect}
                id='grouping-option'
              >
                <option value='Status'> Status</option>
                <option value='Users'> Users</option>
                <option value='Priority'>Priority</option>
              </select>
            </div>
            <div className={styles.headerFormPicker}>
              <label
                className={styles.headerFormLabel}
                htmlFor='sorting-option'
              >
                Ordering
              </label>
              <select
                className={styles.headerFormSelect}
                value={sortingOption}
                onChange={onSortingOptionSelect}
                id='sorting-option'
              >
                <option value='Title'> Title</option>
                <option value='Priority'>Priority</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.board}>
        {columns.map((cardColumn, index) => (
          <div className={styles.cardColumnContainer} key={index}>
            <CardColumn
              columnTitle={cardColumn.columnTitle}
              cards={cardColumn.cards}
              isUserBased={cardColumn?.isUserBased}
              tagColorDictionary={cardColumn.tagColorDictionary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
