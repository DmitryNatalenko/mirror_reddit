import React, { useEffect } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reduser';
import { useNavigate } from 'react-router-dom';

export function SearchBlock() {
  const { loading, data } = useUserData();
  // const token = useSelector<RootState, string>(state => state.token)
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) navigate('/auth')
  // }, [token])

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
    </div>
  );
}
