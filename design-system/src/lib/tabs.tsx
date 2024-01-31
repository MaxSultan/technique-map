import styled from 'styled-components';

type TabProps = {
  name: 'top' | 'bottom' | 'neutral';
};

type TabsProps = {
  tabs: TabProps[];
  currentTab: string;
  setCurrentTab: (arg0: 'top' | 'bottom' | 'neutral') => void;
  className?: string;
};

export const Tabs = styled(
  ({ tabs, currentTab, setCurrentTab, className }: TabsProps) => (
    <div className={className}>
      {tabs.map(({ name }: TabProps) => (
        <div
          onClick={() => setCurrentTab(name)}
          aria-selected={currentTab === name}
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  )
)`
  grid-area: nav;
  display: flex;
  gap: 1px;
  background-color: var(--primary);
  border-bottom: 1px groove var(--secondary);
  color: white;

  & > div[aria-selected='true'] {
    border-bottom: none;
    cursor: not-allowed;
  }

  & > div {
    cursor: pointer;
    border-radius: 3px;
    padding: 16px 32px;
    text-transform: capitalize;
  }
`;
