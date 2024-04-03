import type { Meta, StoryObj } from '@storybook/react';
import { Panel, PanelContext, PanelContextType } from './panel';
import { useContext } from 'react';

export const PanelExample = () => {
  const context = useContext(PanelContext) as PanelContextType;

  const handleButtonClick = () => {
    context?.setPanelTitle('Panel');
    context?.setPanelContent(() => <div>hello</div>);
    context?.showPanel();
  };
  return <button onClick={handleButtonClick}>SHOW PANEL</button>;
};

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'Panel',
};
export default meta;
type Story = StoryObj<typeof Panel>;

export const Primary = {
  args: {},
};
