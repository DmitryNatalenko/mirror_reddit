import React from 'react';
import styles from './headerpost.css';
import { Text } from '../../../uikit/Text';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { UserLink } from '../../CardsList/Card/TextContent/UserLink';
import { useSelector } from 'react-redux';
import { PostState } from '../../../store/posts/reducer';
import { RootState } from '../../../store/reduser';

interface IHeaderProps {
  id?: string;
}

export function HeaderPost({ id }: IHeaderProps) {
  const { data } = useSelector<RootState, PostState>(state => state.post);
  const [postData] = data.filter((el) => el.id === id);

  return (
    <div className={styles.content}>
      <KarmaCounter karma={postData.karma} />
      <div className={styles.title}>
        <Text As={'h2'} size={20}>{postData.title}</Text>
        <div className={styles.content}>
          <UserLink author={postData.author} date={postData.date} authorAvatar={postData.authorAvatar} />
          { postData.flair && <span className={styles.flair}>{postData.flair}</span>}
        </div>

      </div>


    </div>
  );
}
