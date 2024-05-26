import React from 'react';
import * as icon from '../../icons'
import { EIconNames } from '../../enums.global';

interface IIconProps  {
  name: EIconNames;
  size: number;
}

export function Icon({name, size}: IIconProps) {
  const As = icon[name];

  return (
    <As size={size}/>
  );
}
