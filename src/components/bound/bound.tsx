interface BoundProps extends React.PropsWithChildren {}

export const Bound = ({ children }: BoundProps) => {
  return <div>{children}</div>;
};
