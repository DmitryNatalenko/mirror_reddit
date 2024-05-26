import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { useSelector } from 'react-redux';
import { PostState } from '../../../store/posts/reducer';
import { RootState } from '../../../store/reduser';
import { IPostsData } from '../../../store/posts/actions';
import { PostModal } from '../../PostModal';
import { Route, Routes } from 'react-router-dom';


export function Card({ id }: IPostsData) {
  const { data } = useSelector<RootState, PostState>(state => state.post);
  const [postData] = data.filter((el) => el.id === id);

  return (
    <li className={styles.card}>
      <TextContent id={id} />
      <Preview imgPost={postData.imgPost}/>
      <Menu />
      <Controls karma={postData.karma} />
      {/* <Routes>
        <Route path={`/posts/${id}`} element={<PostModal id={id} />} />
      </Routes> */}

    </li>
  );
}
