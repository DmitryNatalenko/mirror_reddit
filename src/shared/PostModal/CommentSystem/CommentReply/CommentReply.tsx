import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { CommentsForm } from '../../CommentsForm';

interface ICommentsProps {
  userName?: string;
  value: string;
  onChange: (value: string) => void;
}

export function CommentReply({ onChange, value }: ICommentsProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function validateTextarea () {
    if (value.length < 3) return 'Too short message!';
    return '';
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.selectionStart = inputRef.current.value.length;
    }
  },[])

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTouched(true);
    setValueError(validateTextarea())

    const isFormValid = !validateTextarea();
    if(!isFormValid) return;
    console.log(value)
  }


  return (
    <CommentsForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      touched={touched}
      error={valueError}
    />
  );
}
