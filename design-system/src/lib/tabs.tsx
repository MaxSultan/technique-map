import styled from 'styled-components';

type TabsProps = {
  tabs: ('top' | 'bottom' | 'neutral')[];
  currentTab: string;
  setCurrentTab: (arg0: 'top' | 'bottom' | 'neutral') => void;
  className?: string;
};

export const Tabs = styled(
  ({ tabs, currentTab, setCurrentTab, className }: TabsProps) => (
    <ul className={className}>
      {tabs.map((i) => (
        <li
          onClick={() => setCurrentTab(i)}
          aria-selected={currentTab === i}
          key={i}
        >
          {i}
        </li>
      ))}
    </ul>
  )
)`
  grid-area: nav;
  display: flex;
  gap: 1px;
  background-color: var(--blue500);
  border-bottom: 1px groove var(--blue500);
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;

  & > li[aria-selected='true'] {
    border-bottom: 2px solid var(--highlight);
    cursor: not-allowed;
  }

  & > li {
    cursor: pointer;
    padding: 16px 32px;
    text-transform: capitalize;
    position: relative;
  }

  & > li:not(:last-of-type)::after {
    content: '|';
    color: rgba(255, 255, 255, 0.25);
    position: absolute;
    right: 0;
  }
`;
