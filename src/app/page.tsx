'use client';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Tabs } from '@/components/tabs';
import { Text, Title } from '@/components/typography';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '600', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

const tabs = [
  {
    title: 'Tab 1',
    content: <div>Content for Tab 1</div>,
  },
  {
    title: 'Tab 2',
    content: <div>Content for Tab 2</div>,
  },
  // Add more tabs as needed
];

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
      <Tabs tabs={tabs} />
      <Tabs tabs={tabs} vertical />
      <Input value="sdsa" onChange={() => {}} id="1" label="lol" />
    </main>
  );
}
