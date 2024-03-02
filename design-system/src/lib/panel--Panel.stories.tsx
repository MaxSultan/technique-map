import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './panel';
import { useRef } from 'react';
import styled from 'styled-components';

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'Panel',
};
export default meta;
type Story = StoryObj<typeof Panel>;

const StyledPanel = styled(Panel)`
  background-color: black;
  color: white;

  &::backdrop {
    background-color: pink;
  }
`;

export const PanelStory = (args) => {
  const panelRef = useRef();

  const handleButtonClick = () => {
    panelRef.current?.showModal();
  };

  return (
    <>
      <button onClick={handleButtonClick}>showPanel</button>
      <StyledPanel
        passedRef={panelRef}
        {...args}
      >
        Panel Content
      </StyledPanel>
    </>
  );
};

export const Primary = {
  args: {},
};
