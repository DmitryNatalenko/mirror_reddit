import React from 'react';
import styles from './commentsystem.css';
import { Comment } from './Comment/Comment';


export interface ICommentPropsList {
  data: {
    author?: string;
    body?: string;
    created?: string;
    id?: string;
    score?: string;
    replies?: {data: {children: ICommentPropsList[]}};
  }
}

type TCommentPropsList = {
  list?: ICommentPropsList[]
}

export function CommentSystem({list}: TCommentPropsList) {
  return (
    <>
      { list &&
      list.map((el) => {
        if (!el.data.body) return null;
        return (
          <Comment key={el.data.id} author={el.data.author} body={el.data.body} created={el.data.created} karma={el.data.score} replies={el.data.replies}/>
         )
      })}
    </>
  );
}
