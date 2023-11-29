import React from 'react';
import TaskCard from './TaskCard';
import { Ticket } from '../utils/types';
import styles from '../styles/components/CardColumn.module.css';

export type CardColumnProps = {
  columnTitle: string;
  cards: Ticket[];
  isUserBased?: boolean;
  tagColorDictionary: any;
};

function CardColumn(props: CardColumnProps) {
  return (
    <div className={styles.cardColumn}>
      <div className={styles.columnHeading}>{props.columnTitle}</div>
      <ul className={styles.columnCardsContainer}>
        {props.cards.map((card, index) => (
          <div key={index}>
            <TaskCard
              title={card.title}
              id={card.id}
              tags={card.tag}
              tagColors={card.tag.map((t) => props.tagColorDictionary[t.toLowerCase()])}
              status={card.status}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CardColumn;
