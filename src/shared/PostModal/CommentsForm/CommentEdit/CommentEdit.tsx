import React from 'react';
import styles from './commentedit.css';
import { Icon } from '../../../../uikit/Icon';
import { EIconNames } from '../../../../enums.global';
import { generateId } from '../../../../utils/js/generateRandomIndex';
import { merge } from '../../../../utils/js/merge';
import { GenericList } from '../../../../uikit/GenericList';

function getList() {
  const list = [
    { text: <button><Icon name={EIconNames.inline} size={20} /></button> },
    { text: <button><Icon name={EIconNames.addimg} size={18}/></button> },
    { text: <button><Icon name={EIconNames.addfile} size={16}/></button> },
    { text: <button><Icon name={EIconNames.load} size={14} /></button> },
    { text: <button><Icon name={EIconNames.avatar} size={18}/></button> },
    { text: <button><Icon name={EIconNames.replace} size={22}/></button> },
    { text: <button><Icon name={EIconNames.link} size={20} /></button> },
    { text: <button><Icon name={EIconNames.audio} size={20}/></button> },
    { text: <button><Icon name={EIconNames.chat} size={20}/></button> },
    { text: <button><Icon name={EIconNames.pencil} size={18} /></button> },
    { text: <button><Icon name={EIconNames.heading} size={16}/></button> },
    { text: <button><Icon name={EIconNames.pdf} size={20}/></button> },
  ].map((el) => ( generateId( merge({ As: 'li' as const })(el))));

  return list;
}

export function CommentEdit() {
  const LIST = getList()
  return (
    <ul className={styles.listIcon}>
      <GenericList list={LIST} />
    </ul>
  );
}
