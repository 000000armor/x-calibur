import React, { ChangeEvent, FocusEvent } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Text } from '../typography';
import styles from './styles.module.scss';

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
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <div className={styles['input-wrapper']}>
      <label htmlFor={id} className={styles.label}>
        <Text bold span>
          {label}
        </Text>
      </label>
      <div className={cn(styles['input-wrapper'], { [styles.error]: error })}>
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(styles.input, { [styles.error]: error })}
        />
        {error && (
          <Image
            src="/warning-icon.svg"
            width={16}
            height={14}
            alt="Picture of the author"
            className={styles['warning-icon']}
          />
        )}
      </div>
      {error && (
        <Text span className={styles['error-message']}>
          {error}
        </Text>
      )}
    </div>
  );
};
