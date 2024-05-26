import React from 'react';
import styles from './useravatar.css';
import { IPostsData } from '../../../../../../store/posts/actions';

export function UserAvatar({ author, authorAvatar }: IPostsData) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={authorAvatar? authorAvatar : 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png'}
        alt="avatar"
      />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
