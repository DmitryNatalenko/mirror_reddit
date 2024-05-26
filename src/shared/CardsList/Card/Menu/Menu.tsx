import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../../uikit/Dropdown';
import { MenuButtonIcon } from '../../../../icons/MenuButtonIcon';
import { MenuList } from './MenuList';

export function Menu() {
   return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <MenuButtonIcon />
        </button>
      }>
        <ul className={styles.listContainer}>
          <MenuList/>
        </ul>
      </Dropdown>
    </div>
  );
}
