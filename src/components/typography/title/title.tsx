import cn from 'classnames';
import styles from './styles.module.scss';

export interface TitleProps {
  size?: 1 | 2 | 3 | 4;
  children: string;
}

export const Title = ({ children, size = 1 }: TitleProps) => {
  const Component = `h${size}` as 'h1';

  return (
    <Component className={cn(styles.component, styles[`h${size}`])}>
      {children}
    </Component>
  );
};
