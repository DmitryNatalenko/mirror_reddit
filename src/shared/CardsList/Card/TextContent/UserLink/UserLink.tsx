import React from 'react';
import styles from './userlink.css';
import { UserAvatar } from './UserAvatar';
import { hoursWordEnd } from '../../../../../utils/js/wordEnd';
import { IPostsData } from '../../../../../store/posts/actions';

export function UserLink({ author, authorAvatar, date }: IPostsData) {
  const hours = Math.floor((Date.now() / 1000 - Number(date)) / 3600);
  const getEnd = hoursWordEnd(String(hours));

  return (
    <div className={styles.metaData}>
      <UserAvatar author={author} authorAvatar={authorAvatar} />
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано</span>
        {getEnd}
      </span>
    </div>
  );
}
