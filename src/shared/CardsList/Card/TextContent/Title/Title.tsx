import React from 'react';
import styles from './title.css';
import { IPostsData } from '../../../../../store/posts/actions';
import { Link } from 'react-router-dom';

export function Title({ id, title }: IPostsData ) {
  return (
    <h2 className={styles.title} >
      <Link to={`/posts/${id}`}>
        {title}
      </Link>
    </h2>
  );
}
