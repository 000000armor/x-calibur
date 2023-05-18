import React, { ChangeEvent, FocusEvent, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Text } from '../typography';

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  disabled = false,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <div className={cn(styles['input-wrapper'])}>
      <label htmlFor={id} className={styles.label}>
        <Text bold>{label}</Text>
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(styles.input)}
      />
      {error && <div className="custom-input__error">{error}</div>}
    </div>
  );
};
