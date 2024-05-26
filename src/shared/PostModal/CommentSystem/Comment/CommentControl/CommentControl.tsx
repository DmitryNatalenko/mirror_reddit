import React from 'react';
import styles from './commentcontrol.css';
import { Icon } from '../../../../../uikit/Icon';
import { Text } from '../../../../../uikit/Text';
import { EColor, EIconNames } from '../../../../../enums.global';

interface IControlProps {
  handleClick: () => void;
}

export function CommentControl({handleClick}: IControlProps) {

  return (
    <div className={styles.control}>
      <button onClick={handleClick} className={styles.btn}>
          <Icon name={EIconNames.comments} size={14} />
          <Text size={14} color={ EColor.grey99 }>Ответить</Text>
      </button>
      <button className={styles.btn}>
          <Icon name={EIconNames.share} size={12}/>
          <Text size={14} color={EColor.grey99}>Поделиться</Text>
      </button>
      <button className={styles.btn}>
          <Icon name={EIconNames.complain} size={12}/>
          <Text mobileSize={12} size={14} color={EColor.grey99}>Пожаловаться</Text>
        </button>
    </div>
  );
}
