import { ICON_ID_TO_COLOR, STATUS_TO_ICON_ID } from '../utils/constants';
import { Status, User } from '../utils/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
        <p>{props.id}</p>
        <div className={styles.cardBody}>
          {!props?.dontShowStatus && (
            <FontAwesomeIcon
              icon={STATUS_TO_ICON_ID[props.status] as IconProp}
              style={{
                color:
                  ICON_ID_TO_COLOR[STATUS_TO_ICON_ID[props.status]] ?? 'black',
              }}
            />
          )}
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
      <div className={styles.rightContainer}>
        {!!props?.showUser && <img src={props.userImage} alt='User' />}
      </div>
    </div>
  );
}

export default TaskCard;
