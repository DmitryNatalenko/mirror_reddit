import React, { ReactElement } from 'react';

interface IItem {
  id: string ;
  text: string | ReactElement;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div' ;
  href?: string;
  icon?: ReactElement;
}

interface IGenericListProps {
  list: IItem[];
}

const NOOP = () => {};

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({As='div', text, onClick=NOOP, className, id, href, icon}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {icon}
          {text}
        </As>
      ))}
    </>
  )
}
