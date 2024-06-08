import styled from 'styled-components';
import { ProgressChart } from './progress-chart';
import { Meta } from '@storybook/react';

const Page = styled.div`
  background: linear-gradient(var(--blue500), var(--blue900));
  min-height: 100vh;
`;

export const Primary = (args: any) => {
  return (
    <Page>
      <ProgressChart
        {...args}
      />
    </Page>
  );
};

const meta: Meta<typeof ProgressChart> = {
  component: ProgressChart,
  title: 'ProgressChart',
  args: { total: 10, current: 4 },
};
export default meta;
