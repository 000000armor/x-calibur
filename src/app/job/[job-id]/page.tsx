import { JobView } from '@/components/job-view/job-view';

interface JobPageProps {
  params: {
    'job-id': string;
  };
}

export default function Page({ params }: JobPageProps) {
  return (
    <div>
      <JobView
        jobTitle="Software Engineer"
        description="This is a description"
      />
    </div>
  );
}
