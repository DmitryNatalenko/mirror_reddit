import React from 'react';
import styles from './modalcontrol.css';
import { MenuList } from '../../CardsList/Card/Menu/MenuList';
import { IPostsData } from '../../../store/posts/actions';

export function ModalControl({ numComments, upvote }: IPostsData) {
  return (
    <div className={styles.content}>
      <ul className={styles.control}>
        <MenuList numComments={numComments} />
      </ul>
      <span className={styles.upvote}>{ upvote && `${upvote * 100}% Проголосовали`}</span>
    </div>
  );
}
