import styled from 'styled-components';
import { GlobalStyle } from './global-style';
import { Meta } from '@storybook/react';

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 8px;
`;
const ColorCube = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`;

export const Primary = () => {
  const colors = ['purple', 'blue', 'gray', 'orange'];

  return (
    <Page>
      {colors
        .flatMap((color) => [
          `${color}100`,
          `${color}200`,
          `${color}300`,
          `${color}400`,
          `${color}500`,
          `${color}600`,
          `${color}700`,
          `${color}800`,
          `${color}900`,
          `${color}950`,
        ])
        .map((color) => (
          <ColorCube color={`var(--${color})`} />
        ))}
      <GlobalStyle />
    </Page>
  );
};

const meta: Meta<typeof GlobalStyle> = {
  component: GlobalStyle,
  title: 'GlobalStyle',
};
export default meta;
