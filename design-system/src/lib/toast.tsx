import styled, { keyframes } from 'styled-components';
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
import { AlertTriangleIcon } from './icons/alert-triangle-icon';

const ICON_VARIANTS = {
  success: CheckIcon,
  warning: AlertTriangleIcon,
  error: AlertTriangleIcon,
};
const VARIANT_COLORS = {
  success: 'var(--affirmative)',
  warning: 'var(--orange500)',
  error: 'red',
};

const CloseButton = styled.button`
  padding: 8px 8px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: none;
  filter: drop-shadow(0px 0px 2px var(--primary));
`;

type ToastComponentTypes = {
  variant: keyof typeof ICON_VARIANTS;
  className?: string;
  onClose: () => void;
  children: ReactNode | ReactNode[];
};

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
    }, [onClose]);

    return (
      <div
        className={className}
        /* @ts-expect-error: next-line -- popover does not exist on DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> */
        popover="auto"
      >
        <Icon style={{ color: VARIANT_COLORS[variant] }} />
        <div>{children}</div>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </div>
    );
  }
)`
  border-radius: 4px;
  filter: drop-shadow(0px 2px 4px var(--primary));
  padding: 16px;
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 16px;
  position: relative;
  overflow: visible;
  border: none;
  border-left: 5px solid ${(props) => VARIANT_COLORS[props.variant]};
  align-items: center;
  background-color: var(--blue400);
  color: var(--gray100);

  animation: ${animateIn} 300ms ease-in both;

  & > ${CloseButton} {
    position: absolute;
    top: 0;
    right: 0;
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

    const idGenerator = () => {
      let id = 0;
      return () => {
        id++;
        return id;
      };
    };

    const getId = idGenerator();
    return (
      <ul className={className}>
        {toasts.map(({ variant, onClose, message }) => (
          <li key={getId()}>
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
