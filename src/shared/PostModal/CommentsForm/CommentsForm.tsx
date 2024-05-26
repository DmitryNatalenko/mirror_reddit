import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './commentsform.css';
import { CommentEdit } from './CommentEdit';

interface ICommentsProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
  userName?: string;
  touched: boolean;
  error?: string;
}

export function CommentsForm({ userName, onSubmit, onChange, value, error, touched }: ICommentsProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.selectionStart = inputRef.current.value.length;
    }
  },[])

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea
        className={styles.input}
        ref={inputRef}
        placeholder={ userName ?
          userName + ', оставьте ваш комментарий' :
          'Аноним, оставьте ваш комментарий' }
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined} />
      <div className={styles.control}>
        <CommentEdit />
        <button type='submit' className={styles.button}>Комментировать</button>
      </div>
      { touched && error &&
        <span className={styles.errorMessage}>{error}</span>
      }
    </form>
  );
}
