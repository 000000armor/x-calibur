import React, { useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { Text } from '../typography';

interface Tab {
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  vertical?: boolean;
}

export const Tabs = ({ tabs, vertical = false }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const isTabActive = (index: number) => index === activeTab;

  const handleSelectTab = (index: number) => () => {
    setActiveTab(index);
  };

  return (
    <ul
      className={cn(styles.list, { [styles.vertical]: vertical })}
      role="tablist"
    >
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={cn(styles.tab, {
            [styles.active]: isTabActive(index),
            [styles.vertical]: vertical,
          })}
          role="tab"
          aria-selected={isTabActive(index)}
          onClick={handleSelectTab(index)}
        >
          <Text bold={isTabActive(index)}>{tab.title}</Text>
        </li>
      ))}
    </ul>
  );
};
