import { GroupingOption, Ticket } from '../utils/types';
import {
  ICON_ID_TO_COLOR,
  PRIORITY_NUM_TO_ICON_ID,
  STATUS_TO_ICON_ID,
} from '../utils/constants';

import DummyAccountImage from '../assets/account.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import TaskCard from './TaskCard';
import styles from '../styles/components/CardColumn.module.css';

export type CardColumnProps = {
  columnTitle: string;
  cards: Ticket[];
  groupingOption: GroupingOption;
  tagColorDictionary: any;
};

function CardColumn(props: CardColumnProps) {
  const isUserBased = props.groupingOption === 'Users';
  const isPriorityBased = props.groupingOption === 'Priority';
  const isStatusBased = props.groupingOption === 'Status';
  return (
    <div className={styles.cardColumn}>
      <div className={styles.columnHeading}>
        {isUserBased && <img src={DummyAccountImage} alt='User' />}
        {isStatusBased && (
          <FontAwesomeIcon
            icon={STATUS_TO_ICON_ID[props.cards[0]?.status ?? 0] as IconProp}
            style={{
              color:
                ICON_ID_TO_COLOR[
                  STATUS_TO_ICON_ID[props.cards[0]?.status ?? 0]
                ] ?? 'black',
            }}
          />
        )}
        {isPriorityBased && (
          <FontAwesomeIcon
            icon={
              PRIORITY_NUM_TO_ICON_ID[props.cards[0]?.priority ?? 0] as IconProp
            }
            style={{
              color:
                ICON_ID_TO_COLOR[
                  PRIORITY_NUM_TO_ICON_ID[props.cards[0]?.priority ?? 0]
                ] ?? 'black',
            }}
          />
        )}
        <p>{props.columnTitle}</p> <p>{props.cards.length}</p>
      </div>
      <ul className={styles.columnCardsContainer}>
        {props.cards.map((card, index) => (
          <div key={index}>
            <TaskCard
              title={card.title}
              id={card.id}
              tags={card.tag}
              tagColors={card.tag.map(
                (t) => props.tagColorDictionary[t.toLowerCase()]
              )}
              status={card.status}
              userImage={DummyAccountImage}
              showUser={!isUserBased}
              dontShowStatus={isStatusBased}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CardColumn;
