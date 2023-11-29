import React, { useState } from 'react';

import CardColumn from './CardColumn';
import styles from '../styles/components/KanbanBoard.module.css';

function KanbanBoard(data: any) {
    return (
      <div className='Board'>
        <div className={styles.header}>Display</div>
        <div className={styles.board}></div>
        <CardColumn />

        {JSON.stringify(data)}
      </div>
    );
}

export default KanbanBoard;
