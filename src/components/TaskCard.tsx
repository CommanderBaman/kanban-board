import { ICON_ID_TO_COLOR, STATUS_TO_ICON_ID } from '../utils/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Status } from '../utils/types';
import styles from '../styles/components/TaskCard.module.css';

export type TaskCardProps = {
  title: string;
  id: string;
  tags: string[];
  tagColors: string[];
  status: Status;
  userAvailable?: boolean;
  userImage: string;
  showUser?: boolean;
  dontShowStatus?: boolean;
};

function TaskCard(props: TaskCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftContainer}>
        <p className={styles.cardId}>{props.id}</p>
        {!props?.dontShowStatus && (
          <div className={styles.cardBody}>
            <FontAwesomeIcon
              className={styles.bodyIcon}
              icon={STATUS_TO_ICON_ID[props.status] as IconProp}
              style={{
                color:
                  ICON_ID_TO_COLOR[STATUS_TO_ICON_ID[props.status]] ?? 'black',
              }}
            />
            <p className={styles.cardTitle}>{props.title}</p>
          </div>
        )}
        {!!props?.dontShowStatus && (
          <p className={styles.cardTitle}>{props.title}</p>
        )}
        <div className={styles.tagsContainer}>
          {props.tags.map((tag, index) => (
            <p
              className={styles.cardTag}
              key={index}
              style={{ color: props.tagColors[index] }}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.rightContainer}>
        {!!props?.showUser && (
          <div className={styles.userImageContainer}>
            <img
              className={styles.userImage}
              src={props.userImage}
              alt='User'
            />
            <div
              className={styles.userAvailable}
              style={{
                backgroundColor: !!props?.userAvailable ? '#ece351' : 'grey',
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
