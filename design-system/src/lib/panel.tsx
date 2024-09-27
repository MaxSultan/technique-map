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
  padding-block-start: 16px;
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

  & > button {
    border-bottom: 2px solid transparent;
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
  if (
    (clickX < left || clickX > right || clickY < top || clickY > bottom) &&
    !ref.current?.contains(e.currentTarget)
  )
    callback();
};

const PanelHeader = styled.hgroup`
  border-bottom: 1px groove var(--secondary);
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  font-weight: 600;
  font-size: 1em;
`;

type PanelProps = {
  children: ReactNode;
  className?: string;
  passedRef: MutableRefObject<HTMLDialogElement>;
  title: string;
  onClose: () => void;
  animationDirection: boolean;
};

export const Panel = styled(
  ({
    children,
    className,
    passedRef,
    title,
    onClose,
    animationDirection,
  }: PanelProps) => {
    return (
      <dialog
        ref={passedRef}
        onClick={(e) => handleClick(passedRef, e, onClose)}
        className={className}
        style={{
          animation: animationDirection
            ? 'slide-in var(--animation-timing) ease-in both'
            : 'slide-out 300ms ease-out both',
        }}
        onAnimationEnd={() => {
          if (!animationDirection) {
            passedRef.current.close();
          }
        }}
      >
        <PanelHeader>
          <h2>{title}</h2>
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
  box-shadow: var(--shadow-elevation-high);
  border: none;
  inset: unset;
  min-height: 100%;
  width: var(--panel-width);
  position: fixed;
  top: 0;
  right: calc(-1 * var(--panel-width));
  padding: 0;

  &[open] {
    &::backdrop {
      animation-name: ${backdropFadeIn};
      animation-duration: var(--animation-timing);
      animation-fill-mode: forwards;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export type PanelContextType = {
  panelContent: ReactNode | ReactNode[];
  setPanelContent: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
  panelTitle: string;
  setPanelTitle: Dispatch<SetStateAction<string>>;
  panelRef: MutableRefObject<MutableRefObject<HTMLDialogElement> | undefined>;
  showPanel: () => void;
  closePanel: () => void;
};

const Null = () => null;

export const PanelContext = createContext<PanelContextType | null>(null);
export const PanelProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [panelContent, setPanelContent] = useState<ReactNode | ReactNode[]>(
    () => <Null />
  );
  const [panelTitle, setPanelTitle] = useState<string>('');
  const panelRef = useRef<MutableRefObject<HTMLDialogElement> | undefined>();
  const [animationDirection, setAnimationDirection] = useState<boolean>(false);

  const closePanel = () => {
    if (panelRef.current) {
      setAnimationDirection(false);
    }
  };

  const showPanel = () => {
    // @ts-expect-error:next-line -- function exists on dialog elements
    panelRef.current?.show();
    setAnimationDirection(true);
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
        /* @ts-expect-error:next-line */
        passedRef={panelRef}
        onClose={closePanel}
        animationDirection={animationDirection}
      >
        <PanelList>{panelContent}</PanelList>
      </Panel>
    </PanelContext.Provider>
  );
};
