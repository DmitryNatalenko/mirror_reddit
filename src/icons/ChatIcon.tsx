import React from 'react';

interface IIconProps {
  size: number;
}

export function ChatIcon ({size}: IIconProps) {
  return (
    <svg width={size} height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z" fill="inherit"/>
    </svg>
  );
}
