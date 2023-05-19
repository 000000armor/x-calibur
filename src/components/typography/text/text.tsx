import cn from 'classnames';
import styles from './styles.module.scss';

export interface TextProps {
  children: string;
  bold?: boolean;
  span?: boolean;
  className?: string;
}

export const Text = ({
  children,
  bold = false,
  span = false,
  className,
}: TextProps) => {
  const Component = span ? 'span' : 'p';
  return (
    <Component
      className={cn(styles.component, { [styles.bold]: bold }, className)}
    >
      {children}
    </Component>
  );
};
