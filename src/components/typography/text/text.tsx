import cn from 'classnames';
import styles from './styles.module.scss';

export interface TextProps {
  bold?: boolean;
  children: string;
}

export const Text = ({ children, bold = false }: TextProps) => {
  return (
    <p className={cn(styles.component, { [styles.bold]: bold })}>{children}</p>
  );
};
