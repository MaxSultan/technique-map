import styled from 'styled-components';

type TabsProps = {
  tabs: ('top' | 'bottom' | 'neutral')[];
  currentTab: string;
  setCurrentTab: (arg0: 'top' | 'bottom' | 'neutral') => void;
  className?: string;
};

export const Tabs = styled(
  ({ tabs, currentTab, setCurrentTab, className }: TabsProps) => (
    <div className={className}>
      {tabs.map((i) => (
        <div
          onClick={() => setCurrentTab(i)}
          aria-selected={currentTab === i}
          key={i}
        >
          {i}
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
    border-bottom: 2px solid var(--highlight);
    cursor: not-allowed;
  }

  & > div {
    cursor: pointer;
    padding: 16px 32px;
    text-transform: capitalize;
  }
`;
