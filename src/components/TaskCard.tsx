import { Status, User } from '../utils/types';

import styles from '../styles/components/TaskCard.module.css';

export type TaskCardProps = {
  title: string;
  id: string;
  tags: string[];
  tagColors: string[];
  status: Status;
  userAvailable?: boolean;
  userImage?: string;
  showUser?: boolean;
};

function TaskCard(props: TaskCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftContainer}>
        <p>{props.id}</p>
        <div className={styles.cardBody}>
          <>{props.status}</>
          <p>{props.title}</p>
        </div>
        <div className={styles.tagsContainer}>
          {props.tags.map((tag, index) => (
            <p key={index} style={{ color: props.tagColors[index] }}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
}

export default TaskCard;
