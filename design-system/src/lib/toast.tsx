import styled from 'styled-components';
import { CheckIcon } from './icons/check-icon';
import {
  ReactNode,
  createContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { CloseIcon } from './icons/close-icon';

const ICON_VARIANTS = {
  success: CheckIcon,
};
const VARIANT_COLORS = {
  success: 'var(--affirmative)',
};

type ToastComponentTypes = {
  variant: keyof typeof ICON_VARIANTS;
  className?: string;
  onClose: () => void;
  children: ReactNode | ReactNode[];
};

export const Toast = styled(
  ({ className, variant, children, onClose }: ToastComponentTypes) => {
    const ref = useRef<HTMLDivElement>();
    const Icon = ICON_VARIANTS[variant];

    // Use the popover API to make this appear on top of the dialog
    useEffect(() => {
      if (ref.current) ref.current.showPopover();
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        className={className}
        /* @ts-expect-error: next-line -- popover does not exist on DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> */
        popover="auto"
      >
        <Icon style={{ color: VARIANT_COLORS[variant] }} />
        <div>{children}</div>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    );
  }
)`
  border-radius: 16px;
  box-shadow: 0px 2px 4px var(--primary);
  padding: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
  position: relative;
  overflow: visible;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > button {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    aspect-ratio: 1/1;
    transform: translate(50%, -50%);
  }
`;

export type ToastDataType = Pick<ToastComponentTypes, 'variant' | 'onClose'> & {
  message: string | ReactNode;
};

type ToastDisplayTypes = {
  toasts: ToastDataType[];
  className?: string;
};

export const ToastDisplay = styled(
  ({ toasts, className }: ToastDisplayTypes) => {
    const id = useId(); // TODO: come up with a better plan for this
    return (
      <ul className={className}>
        {toasts.map(({ variant, onClose, message }) => (
          <li key={id}>
            <Toast
              variant={variant}
              onClose={onClose}
            >
              {message}
            </Toast>
          </li>
        ))}
      </ul>
    );
  }
)`
  list-style: none;
  display: grid;
  gap: 16px;
  margin: 0;
  justify-items: start;

  & > li > ${Toast} {
    background-color: var(--secondary);
    color: white;
  }
`;

export type ToastContextType = {
  removeToast: (arg: string) => void;
  addToast: (arg: ToastDataType) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
export const ToastProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [toasts, setToasts] = useState<ToastDataType[]>([]);

  const addToast = (toast: ToastDataType) => {
    setToasts((prev) => [...prev, toast]);
  };

  const removeToast = (deleteMessage: string) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.message !== deleteMessage)
    );
  };

  return (
    <ToastContext.Provider
      value={{
        removeToast,
        addToast,
      }}
    >
      {children}
      <ToastDisplay toasts={toasts} />
    </ToastContext.Provider>
  );
};
