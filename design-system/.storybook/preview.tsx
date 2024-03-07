import React, { ReactFragment } from 'react';

import { Preview } from '@storybook/react';

import { GlobalStyle as Styles } from '../src/lib/global-style';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Styles />
          <Story/>
      </>
  )
  ],
};

export default preview;