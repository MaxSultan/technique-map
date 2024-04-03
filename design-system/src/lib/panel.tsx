import {
  ReactNode,
  MouseEvent,
  MutableRefObject,
  createContext,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { CloseIcon } from './icons/close-icon';

const backdropFadeIn = keyframes`
  to {
     backdrop-filter: blur(3px);
  }
`;

export const PanelList = styled.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`;

export const PanelItem = styled(
  ({ className, children, addToPracticePlan }) => {
    return (
      <li className={className}>
        <button onClick={addToPracticePlan}>{children}</button>
      </li>
    );
  }
)`
  list-style: none;

  --border-radius: 16px;
  & > button {
    padding: 16px 32px;
    background-color: var(--secondary);
    color: white;
    border: none;
    width: 100%;
    cursor: pointer;
  }

  &:first-of-type > button {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  &:last-of-type > button {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  &:first-of-type:last-of-type > button {
    border-radius: var(--border-radius);
  }

  &:not(&:last-of-type, &:hover) > button {
    border-bottom: 2px solid var(--primary);
  }

  &:hover > button {
    border-bottom: 2px solid var(--highlight);
  }
`;

const handleClick = (
  ref: MutableRefObject<HTMLDialogElement>,
  e: MouseEvent,
  callback: () => void
) => {
  const { top, bottom, left, right } = ref.current.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;
  if (clickX < left || clickX > right || clickY < top || clickY > bottom)
    callback();
};

const PanelHeader = styled.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type PanelProps = {
  children: ReactNode;
  className?: string;
  passedRef: MutableRefObject<HTMLDialogElement>;
  title: string;
  onClose: () => void;
};

export const Panel = styled(
  ({ children, className, passedRef, title, onClose }: PanelProps) => {
    const handleCloseIconClick = () => {
      if (passedRef.current) {
        passedRef.current.style.animationName = 'slide-out';
        setTimeout(() => {
          passedRef.current.close();
        }, 1500);
      }
    };

    return (
      <dialog
        ref={passedRef}
        onClick={(e) => handleClick(passedRef, e, onClose)}
        className={className}
      >
        <PanelHeader>
          {title}
          <CloseIcon onClick={onClose} />
        </PanelHeader>
        {children}
      </dialog>
    );
  }
)`
  --animation-timing: 0.3s;
  --panel-width: 300px;

  transform-origin: right center;
  box-shadow: -16px 0px 16px -16px hsl(from var(--primary) h s calc(l * 0.1));

  border: none;
  inset: unset;

  min-height: 100%;
  width: var(--panel-width);

  position: fixed;
  top: 0;
  right: calc(-1 * var(--panel-width));
  padding: 0;

  background-color: var(--primary);
  animation-duration: var(--animation-timing);
  animation-delay: 300ms;
  animation-timing-function: ease-out;
  animation-fill-mode: both;

  &[open] {
    animation-name: slide-in;

    &::backdrop {
      animation-name: ${backdropFadeIn};
      animation-duration: var(--animation-timing);
      animation-fill-mode: forwards;
    }
  }

  @keyframes slide-out {
    from {
      opacity: 1;
      transform: translateX(-100%);
    }
    to {
      opacity: 0;
      transform: translateX(0%);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(0%);
    }
    to {
      opacity: 1;
      transform: translateX(-100%);
    }
  }
`;

export type PanelContextType = {
  panelContent: ReactNode | ReactNode[];
  setPanelContent: Dispatch<SetStateAction<undefined>>;
  panelTitle: string;
  setPanelTitle: Dispatch<SetStateAction<string>>;
  panelRef: MutableRefObject<MutableRefObject<HTMLDialogElement> | undefined>;
  showPanel: () => void;
  closePanel: () => void;
};

export const PanelContext = createContext<PanelContextType | null>(null);
export const PanelProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [panelContent, setPanelContent] = useState<any>();
  const [panelTitle, setPanelTitle] = useState<string>('');
  const panelRef = useRef<MutableRefObject<HTMLDialogElement> | undefined>();

  const closePanel = () => {
    if (panelRef.current) {
      // @ts-ignore:next-line -- style exists on ref
      panelRef.current.style.animationName = 'slide-out';
      setTimeout(() => {
        // @ts-ignore:next-line -- function does exist on dialog elements
        panelRef.current.close();
      }, 600);
    }
  };

  const showPanel = () => {
    // @ts-ignore:next-line -- style exists on ref
    panelRef.current.style.animationName = 'slide-in';
    // @ts-ignore:next-line -- function does exist on dialog elements
    panelRef.current?.showModal();
  };

  return (
    <PanelContext.Provider
      value={{
        panelContent,
        setPanelContent,
        panelTitle,
        setPanelTitle,
        panelRef,
        showPanel,
        closePanel,
      }}
    >
      {children}
      <Panel
        title={panelTitle}
        /* @ts-ignore:next-line */
        passedRef={panelRef}
        onClose={closePanel}
      >
        <PanelList>{panelContent}</PanelList>
      </Panel>
    </PanelContext.Provider>
  );
};
