import React from 'react';
import styles from './menulist.css';
import classNames from 'classnames';
import { Icon } from '../../../../../uikit/Icon';
import { EColor, EIconNames } from '../../../../../enums.global';
import { Text } from '../../../../../uikit/Text';
import { generateId } from '../../../../../utils/js/generateRandomIndex';
import { merge } from '../../../../../utils/js/merge';
import { GenericList } from '../../../../../uikit/GenericList';
import { commentWordEnd } from '../../../../../utils/js/wordEnd';

const classes = classNames(
  styles['item'],
  styles['mobile-hide'],
);

interface ICommentProp {
  numComments?: string ;
}


function getList(numComments: string | undefined) {
  const list = [
    {
      text:
        <button>
          <Icon name={EIconNames.comments} size={14} />
          <Text size={14} color={ EColor.grey99 }>{ numComments ? `${numComments} ${commentWordEnd(numComments)}` : 'Комментарии' }</Text>
        </button>,
      className: classes,
    }, {
      text:
        <button>
          <Icon name={EIconNames.share} size={12}/>
          <Text size={14} color={EColor.grey99}>Поделиться</Text>
        </button>,
      className: classes,
    }, {
      text:
        <button>
          <Icon name={EIconNames.hide} size={14}/>
          <Text mobileSize={12} size={14} color={EColor.grey99}>Скрыть</Text>
        </button>,
      className: styles.item,
    }, {
      text:
        <button>
          <Icon name={EIconNames.save} size={14}/>
          <Text size={14} color={EColor.grey99}>Сохранить</Text>
        </button>,
      className: classes,
    }, {
      text:
        <button>
          <Icon name={EIconNames.complain} size={12}/>
          <Text mobileSize={12} size={14} color={EColor.grey99}>Пожаловаться</Text>
        </button>,
      className: styles.item,
    }, {
      text:
        <button>
          <Text mobileSize={12} size={14} color={EColor.grey66}>Закрыть</Text>
        </button>,
      className: styles.item },
  ].map((el) => ( generateId( merge({ As: 'li' as const })(el))));

  return list
}


export function MenuList({numComments}: ICommentProp) {
  const LIST = getList(numComments)

  return <GenericList list={LIST}/>
}
