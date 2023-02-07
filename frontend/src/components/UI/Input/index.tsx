import { FC } from 'react';

import styles from './styles.module.css';

interface InputProps {
  placeholder: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export enum InputPlaceholders {
  name = 'Your name',
  sentence = 'Write a sentence',
  guess = "What's in the picture?",
}

export const Input: FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <input 
      className={styles.input} 
      type="text" 
      placeholder={placeholder} 
      onChange={onChange}
    />
  );
}