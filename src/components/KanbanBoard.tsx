import CardColumn, { CardColumnProps } from './CardColumn';
import { GroupingOption, SortingOption, Ticket, User } from '../utils/types';
import {
  PRIORITY_NUM_TO_WORD,
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
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

  const [groupingOption, setGroupingOption] = useState(
    DEFAULT_GROUPING_OPTION as GroupingOption
  );
  const [sortingOption, setSortingOption] = useState(
    DEFAULT_SORTING_OPTION as SortingOption
  );

  const onGroupingOptionSelect = (e: any) => {
    setGroupingOption(e.target.value);
  };
  const onSortingOptionSelect = (e: any) => {
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
    const sortingFunction = makeSortFunction(sortingOption);
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
        <div className={styles.headerForm}>
          <label>
            Grouping
            <select value={groupingOption} onChange={onGroupingOptionSelect}>
              <option value='Status'> Status</option>
              <option value='Users'> Users</option>
              <option value='Priority'>Priority</option>
            </select>
          </label>
          <label>
            Ordering
            <select value={sortingOption} onChange={onSortingOptionSelect}>
              <option value='Title'> Title</option>
              <option value='Priority'>Priority</option>
            </select>
          </label>
        </div>
      </div>
      <div className={styles.board}>
        {columns.map((cardColumn, index) => (
          <div className={styles.cardColumnContainer} key={index}>
            <CardColumn
              columnTitle={cardColumn.columnTitle}
              cards={cardColumn.cards}
              isUserBased={cardColumn?.isUserBased}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
