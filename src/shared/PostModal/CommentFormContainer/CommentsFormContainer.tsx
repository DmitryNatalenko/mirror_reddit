import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../../store/reduser';
import { CommentsForm } from '../CommentsForm';

interface ICommentsProps {
  userName?: string;
}

export function CommentsFormContainer({ userName }: ICommentsProps) {
  const value = useSelector<RootState, string>((state) => state.commentText);
  const [touched, setTouched] = useState(false);
  const [valueError, setValueError] = useState('');

  function validateTextarea () {
    if (value.length < 3) return 'Too short message!';
    return '';
  }

  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch( updateComment(event.target.value));
  }

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
      userName={userName}
      touched={touched}
      error={valueError}
    />
  );
}
