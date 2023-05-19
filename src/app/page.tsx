'use client';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Text, Title } from '@/components/typography';
import { montserrat } from '@/styles/fonts';

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
        <Text>some text</Text>
      </div>
      <Button>lebanon</Button>
      <Title size={1}>sadadadaa</Title>
      <Title size={2}>sadadadaa</Title>
      <Title size={3}>sadadadaa</Title>
      <Title size={4}>sadadadaa</Title>
      <Input value="sdsa" onChange={() => {}} id="1" label="lol" />
    </main>
  );
}
