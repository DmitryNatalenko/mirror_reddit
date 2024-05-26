import { useEffect } from 'react';
import { PostState } from '../store/posts/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reduser';
import { postRequestAsync } from '../store/posts/actions';
import { useNavigate } from 'react-router-dom';

export function usePostsData () {
  const { loading, data, error } = useSelector<RootState, PostState>(state => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/posts', { replace: false })
    dispatch(postRequestAsync())
  }, []);

  return { data, loading, error };
};
