import React, { useState, useEffect, useRef } from 'react';
import styles from './dropdown.css';
import { createPortal } from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

interface ICoord {
  left: number;
  top: number;
  width: number;
  height: number;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose=NOOP, onOpen=NOOP }: IDropdownProps) {
  const [coord, setCoord] = useState<ICoord | null>(null)
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  function getCoords () {
    const button = buttonRef.current?.getBoundingClientRect();

    if (button) {
      return {
        left: button.left,
        top: button.top + scrollY,
        height: button.height,
        width: button.width,
      };
    }

    return null;
  }

  // не знаю можно ли так делать? В документации пишут что стоит этого избегать.
  const coords = {
    left: coord !== null ? `${coord.left + coord.width / 2}px` : 0,
    top: coord !== null ? `${coord.top + coord.height}px` : 0,
  }

  const node = document.getElementById('modal_root');
  if (!node) return null;


  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose()
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && buttonRef.current?.contains(event.target) ) {
        const coords = getCoords();
        setCoord(coords);
      }

      if (isDropdownOpen && event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [isDropdownOpen])

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={buttonRef}>
        {button}
      </div>
      {isDropdownOpen && createPortal(
        <div ref={menuRef} style={coords} className={styles.list} onClick={() => setIsDropdownOpen(false)}>
          {children}
        </div>
      , node)}
    </div>
  );
}
