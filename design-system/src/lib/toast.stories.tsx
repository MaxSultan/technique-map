import styled from 'styled-components';
import { Toast, ToastContext, ToastContextType } from './toast';
import { Button } from './button';
import { useContext } from 'react';

const Page = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  min-height: 100vh;
  background: var(--gray100);
`;

export const SuccessToast = (args: any) => (
  <Page>
    <Toast
      {...args}
      variant="success"
    >
      Great Success
    </Toast>
  </Page>
);

export const WarningToast = (args: any) => (
  <Page>
    <Toast
      {...args}
      variant="warning"
    >
      Houston, We have a problem
    </Toast>
  </Page>
);

export const ErrorToast = (args: any) => (
  <Page>
    <Toast
      {...args}
      variant="error"
    >
      Great Success
    </Toast>
  </Page>
);

export const JSToast = () => {
  const { addToast, removeToast } = useContext(
    ToastContext
  ) as unknown as ToastContextType;

  const handleClick = () => {
    const randInt = Math.random() * 100;
    addToast({
      variant: 'success',
      message: `practice plan ${randInt} cleared`,
      onClose: () => removeToast(`practice plan ${randInt} cleared`),
    });
  };

  return (
    <Page>
      <Button
        onClick={handleClick}
        text="Toast!"
      />
    </Page>
  );
};

export default {
  name: 'Toast',
  component: Toast,
};
