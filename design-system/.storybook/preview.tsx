import React from 'react';

import { Preview } from '@storybook/react';

import { GlobalStyle as Styles } from '../src/lib/global-style';
import { Panel, PanelProvider } from '../src/lib/panel';
import { Toast, ToastDisplay, ToastProvider } from '../src/lib/toast';
import styled, { keyframes } from 'styled-components';

const animateIn = keyframes`
  from {
    transform: translateX(calc(100% + var(--toast-position)));
    opacity: 0.25;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const StyledPositions = styled.div`
  & > ${ToastDisplay} {
    --toast-position: 50%;
    position: fixed;
    bottom: 16px;
    right: 50%;

    & ${Toast} {
      animation: ${animateIn} 300ms ease-in both;
    }
  }

  & > ${Panel} {
    background: var(--gray100);
  }

  @media screen and (width > 850px) {
    & > ${ToastDisplay} {
      --toast-position: 32px;
      right: var(--toast-position);
    }
  }
`;

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyledPositions>
        <ToastProvider>
          <PanelProvider>
            <Styles />
            <Story />
          </PanelProvider>
        </ToastProvider>
      </StyledPositions>
    ),
  ],
};

export default preview;
