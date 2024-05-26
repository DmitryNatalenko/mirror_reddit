import React, { useEffect, useState, useRef } from 'react';
import ReactDOM  from 'react-dom';
import styles from './postModal.css';
import axios from 'axios';
import { HeaderPost } from './HeaderPost';
import { ModalContent } from './ModalContent';
import { ModalControl } from './ModalControl';
import { CommentSystem } from './CommentSystem';
import { Text } from '../../uikit/Text';
import { EColor } from '../../enums.global';
import { CommentsFormContainer } from './CommentFormContainer';
import { useSelector } from 'react-redux';
import { IUserData } from '../../store/me/actions';
import { RootState } from '../../store/reduser';
import { PostState } from '../../store/posts/reducer';
import { useNavigate, useParams } from 'react-router-dom';

export function PostModal () {
  const { id } = useParams()
  const { data } = useSelector<RootState, PostState>(state => state.post);
  const [postData] = data.filter((el) => el.id === id);
  const { name } = useSelector<RootState, IUserData>(state => state.me.data);
  const postRef = useRef<HTMLDivElement>(null);
  const [commentData, setCommentData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://api.reddit.com/r/${postData.author}/comments/${id}`)
      .then((resp) => {
        const data = resp.data[1].data.children;
        return setCommentData(data)
      })

    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !postRef.current?.contains(event.target)) {
        navigate('/posts', { replace: true });
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      setCommentData(undefined);
    }
  }, [])

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal ((
    <div className={styles.modal} ref={postRef} >
      <HeaderPost id={id} />
      <ModalContent />
      <ModalControl  numComments={postData.numComments} upvote={postData.upvote}/>
      <CommentsFormContainer userName={name}/>
      <div className={styles.sort}>
        <Text size={14} color={EColor.grey99}>Сортировать по: </Text>
        <button className={styles.sortBtn}>Лучшие</button>
      </div>
      <CommentSystem list={commentData}/>
    </div>
  ), node);
}
