import { Bound } from '../bound';

interface JobViewProps {
  jobTitle: string;
  description: string;
}

export const JobView = ({ jobTitle, description }: JobViewProps) => {
  return (
    <Bound>
      <div>{jobTitle}</div>
      <p>{description}</p>
    </Bound>
  );
};
