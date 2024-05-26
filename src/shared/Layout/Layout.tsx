import React from 'react';
import styles from './layout.css';
import { usePostsData } from '../../hooks/usePostsData';
import { Header } from '../Header/Header';
import { Content } from '../Content';
import { Outlet } from 'react-router-dom';

export function Layout() {
  usePostsData();

  return (
    <div className={styles.layout}>
      <Header/>
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
