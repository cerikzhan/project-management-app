import { useEffect, useState } from 'react';

let timeoutId = 0;

export const useDebounce = (payload: string): [(value: string) => void] => {
  const [text, setText] = useState(payload);

  useEffect(() => {
    console.log(text);
  }, [text]);

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
