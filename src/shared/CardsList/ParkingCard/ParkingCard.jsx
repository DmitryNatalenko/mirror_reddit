import React from 'react';
import styles from './parkingcard.css';
import { MenuButtonIcon } from '../../../icons';
import { KarmaCounter } from '../Card/Controls/KarmaCounter';

export function ParkingCard() {
  return (
    <li className={styles.card}>
      <div className={styles.preview}></div>
      <div className={styles.content}>
        <div className={styles.title}></div>
        <div className={styles.row}>
          <div className={styles.date}></div>
          <div className={styles.avatar}></div>
          <div className={styles.name}></div>
        </div>
        <div className={styles.row}>
          <div className={styles.control}></div>
          <div className={styles.describe}></div>
        </div>
      </div>
      <div className={styles.menu}>
        <MenuButtonIcon />
      </div>
      <div className={styles.karma}>
        <KarmaCounter karma='100'/>
      </div>
    </li>
  );
}
