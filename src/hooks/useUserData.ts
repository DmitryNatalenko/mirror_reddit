import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reduser';
import { meRequestAsync } from '../store/me/actions';
import { MeState } from '../store/me/reducer';

export function useUserData () {
  const { loading, data } = useSelector<RootState, MeState>(state => state.me);
  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if ( token !== '' && token !== 'undefined') {
      dispatch(meRequestAsync());
    }
  }, [token]);

  return { data, loading };
};
