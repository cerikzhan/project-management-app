import { useEffect, useState } from 'react';
import { useAppDispatch } from './redux';
import { filterBoards } from '../store/reducers/actionCreators';

let timeoutId = 0;

export const useDebounce = (payload: string): [(value: string) => void] => {
  const [text, setText] = useState(payload);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterBoards(text));
  });

  const withDebounce = () => {
    return (value: string) => {
      window.clearTimeout(timeoutId);

      timeoutId = window.setTimeout(() => {
        setText(value);
      }, 500);
    };
  };

  return [withDebounce()];
};
