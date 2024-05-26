import React from 'react';
import styles from './controls.css';
import { Comments } from './Comments';
import { Share } from './Share';
import { Save } from './Save';
import { KarmaCounter } from './KarmaCounter';

interface IControlsProps {
  karma?: string;
}

export function Controls({ karma }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karma={karma} />
      <Comments />
      <div className={styles.actions}>
        <Share />
        <Save />
      </div>
    </div>
  );
}
