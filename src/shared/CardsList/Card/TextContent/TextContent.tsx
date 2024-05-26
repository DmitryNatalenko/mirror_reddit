import React, {useContext} from 'react';
import styles from './textcontent.css';
import { UserLink } from './UserLink';
import { Title } from './Title';
import { useSelector } from 'react-redux';
import { IPostsData } from '../../../../store/posts/actions';
import { PostState } from '../../../../store/posts/reducer';
import { RootState } from '../../../../store/reduser';

export function TextContent({ id }: IPostsData) {
  const { data } = useSelector<RootState, PostState>(state => state.post);
  const [postData] = data.filter((el) => el.id === id);

  return (
    <div className={styles.textContent}>
      <UserLink author={postData.author} authorAvatar={postData.authorAvatar} date={postData.date} />
      <Title title={postData.title} id={id}  author={postData.author} />
    </div>
  );
}
