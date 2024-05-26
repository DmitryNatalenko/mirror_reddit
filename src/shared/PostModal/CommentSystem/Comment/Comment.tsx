import React, { useState } from 'react';
import styles from './comment.css';
import { Text } from '../../../../uikit/Text';
import { KarmaCounter } from '../../../CardsList/Card/Controls/KarmaCounter';
import { ICommentPropsList } from '../CommentSystem';
import { UserAvatar } from '../../../CardsList/Card/TextContent/UserLink/UserAvatar';
import { hoursWordEnd } from '../../../../utils/js/wordEnd';
import { EColor } from '../../../../enums.global';
import { CommentControl } from './CommentControl';
import { CommentsForm } from '../../CommentsForm';
import { CommentReply } from '../CommentReply';

interface ICommentProps {
  author?: string;
  authorAvatar?: string;
  created?: string;
  replies?: {data: {children: ICommentPropsList[]}};
  body?: string;
  karma?: string;
  data?: ICommentProps;
}

export function Comment({author, authorAvatar, created, replies, body, karma}: ICommentProps) {
  const [reply, setReply] = useState(false);
  const [value, setValue] = useState(author? `${author}, ` : '');
  const hours = Math.floor((Date.now() / 1000 - Number(created)) / 3600);
  const getText = hoursWordEnd(String(hours));

  return (
    <div className={styles.block}>
      <div className={styles.border}>
        <KarmaCounter karma={karma} />
        <button className={styles.line}/>
      </div>
      <div className={styles.content}>
        <div className={styles.author}>
          <UserAvatar author={author} authorAvatar={authorAvatar} />
          <Text As='span' size={14} color={EColor.grey99}>{getText}</Text>
        </div>
        <Text As='p' size={14}>{body}</Text>
        <CommentControl handleClick={() => setReply(!reply)} />
        { reply&&
          <CommentReply value={value} userName={author} onChange={setValue} />
        }
        { replies &&
          replies.data.children.map((el) => {
            if (!el.data.author) return null;
            return (
              <div key={el.data.id} className={styles.comment}>
                <Comment key={el.data.id} author={el.data.author} created={el.data.created} replies={el.data.replies} body={el.data.body} karma={el.data.score} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
