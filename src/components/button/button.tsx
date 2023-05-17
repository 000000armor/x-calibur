import { ButtonHTMLAttributes } from 'react';

export interface ComponentProps extends React.PropsWithChildren {
  view?: 'primary' | 'secondary';
  size?: 's' | 'm' | 'l';
  className?: string;
}

export type ButtonProps = ComponentProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  view = 'primary',
  children,
  size = 'm',
  className,
  ...rest
}: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
