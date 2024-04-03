import React, { ReactFragment } from 'react';

import { Preview } from '@storybook/react';

import { GlobalStyle as Styles } from '../src/lib/global-style';
import { PanelProvider } from '@technique-map/design-system';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <PanelProvider>
          <Styles />
          <Story />
        </PanelProvider>
      </>
    ),
  ],
};

export default preview;
