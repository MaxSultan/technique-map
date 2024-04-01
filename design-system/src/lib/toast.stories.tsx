import { Toast } from './toast';

export const SuccessToast = (args: any) => (
  <Toast
    {...args}
    variant="success"
  >
    Great Success
  </Toast>
);

export default {
  name: 'Toast',
  component: Toast,
};
