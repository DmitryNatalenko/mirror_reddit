import React from 'react';
import styles from './userblock.css';
import { Icon } from '../../../../uikit/Icon';
import { EColor, EIconNames } from '../../../../enums.global';
import { Break } from '../../../../uikit/Break';
import { Text } from '../../../../uikit/Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize.compact?client_id=ike4h2vJJ9uIkxupISjjrg&response_type=code&state=random_string&redirect_uri=http://www.localhost:3000/auth&duration=permanent&scope=identity read submit"
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <Icon name={EIconNames.anonym} size={30} />
        }
      </div>
      <div className={styles.userName}>
        <Break size={12} inline/>
        {loading ?
          <Text size={20} color={EColor.grey99}>Загрузка...</Text>
          :
          <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
        }
      </div>
    </a>
  );
}
