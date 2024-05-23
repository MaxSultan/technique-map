import { mount } from 'cypress/react18';
import { HashRouter } from 'react-router-dom';
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
import './commands';
import './sc-monkeypatch';
import { GlobalStyle } from '@technique-map/design-system';

// add component testing only related command here, such as mount
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add(
  'mount',
  (component, options = { routerProps: { initialEntries: ['/'] } }) => {
    const { routerProps, ...mountOptions } = options;

    const wrapped = (
      <HashRouter
        {...routerProps}
        basename="/technique-map/"
      >
        {component}
        <GlobalStyle />
      </HashRouter>
    );

    return mount(wrapped, mountOptions);
  }
);
