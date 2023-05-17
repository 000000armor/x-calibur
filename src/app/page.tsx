import { Button } from '@/components/button';
import { Text, Title } from '@/components/typography';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div>
        <h1> root page TODO - </h1>
        <ul>
          <li>description</li>
          <li>add link to jobs list</li>
          <li>add link to new job form</li>
        </ul>
        <Text>some texty</Text>
      </div>
      <Button>lebanon</Button>
      <Title size={1}>sadadadaa</Title>
      <Title size={2}>sadadadaa</Title>
      <Title size={3}>sadadadaa</Title>
      <Title size={4}>sadadadaa</Title>
    </main>
  );
}
