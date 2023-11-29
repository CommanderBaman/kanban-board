import { GroupingOption, Ticket, User } from '../utils/types';
import {
  ICON_IDS,
  ICON_ID_TO_COLOR,
  PRIORITY_NUM_TO_ICON_ID,
  PRIORITY_OPTIONS,
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
  users: User[];
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
        {isUserBased && (
          <div className={styles.headingImageContainer}>
            <img
              className={styles.headingImage}
              src={DummyAccountImage}
              alt='User'
            />
            <div
              className={styles.userAvailable}
              style={{
                backgroundColor: !!props.users[
                  props.users.findIndex(
                    (user) => user.name === props.columnTitle
                  )
                ]?.available 
                  ? '#ece351'
                  : 'grey',
              }}
            ></div>
          </div>
        )}
        {isStatusBased && (
          <FontAwesomeIcon
            // eslint-disable-next-line
            icon={STATUS_TO_ICON_ID[props.columnTitle] as IconProp}
            style={{
              color:
                ICON_ID_TO_COLOR[STATUS_TO_ICON_ID[props.columnTitle]] ??
                'black',
            }}
          />
        )}
        {isPriorityBased && (
          <FontAwesomeIcon
            icon={
              PRIORITY_NUM_TO_ICON_ID[
                PRIORITY_OPTIONS.findIndex(
                  (option) => option === props.columnTitle
                )
              ] as IconProp
            }
            style={{
              color:
                ICON_ID_TO_COLOR[
                  PRIORITY_NUM_TO_ICON_ID[
                    PRIORITY_OPTIONS.findIndex(
                      (option) => option === props.columnTitle
                    )
                  ]
                ] ?? 'black',
            }}
          />
        )}
        <p className={styles.columnTitle}>{props.columnTitle}</p>{' '}
        <p className={styles.fadedText}>{props.cards.length}</p>
        <div className={styles.spaceMaker}></div>
        <FontAwesomeIcon
          className={styles.headingIcon}
          icon={ICON_IDS.PLUS as IconProp}
        />
        <FontAwesomeIcon
          className={styles.headingIcon}
          icon={ICON_IDS.ELLIPSIS as IconProp}
        />
      </div>
      <ul className={styles.columnCardsContainer}>
        {props.cards.map((card, index) => (
          <li className={styles.columnCardContainer} key={index}>
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
              userAvailable={
                props.users[
                  props.users.findIndex((user) => user.id === card.userId)
                ].available
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardColumn;
