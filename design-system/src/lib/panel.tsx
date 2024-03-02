import { ReactNode, MouseEvent, MutableRefObject } from 'react';
import styled, { keyframes } from 'styled-components';
import { CloseIcon } from './icons/close-icon';

const backdropFadeIn = keyframes`
 from {
     display:none;
     background-color: rgb(0 0 0 / 0);
  }
  
  to {
     display:block;
     background-color: rgb(0 0 0 / 0.25);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(0%);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
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
  e: MouseEvent
) => {
  const { top, bottom, left, right } = ref.current.getBoundingClientRect();
  const clickX = e.clientX;
  const clickY = e.clientY;
  if (clickX < left || clickX > right || clickY < top || clickY > bottom)
    ref.current?.close();
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
};

export const Panel = styled(
  ({ children, className, passedRef, title }: PanelProps) => {
    const handleCloseIconClick = () => {
      passedRef.current.close();
    };

    return (
      <dialog
        ref={passedRef}
        onClick={(e) => handleClick(passedRef, e)}
        className={className}
      >
        <PanelHeader>
          {title}
          <CloseIcon onClick={handleCloseIconClick} />
        </PanelHeader>
        {children}
      </dialog>
    );
  }
)`
  --animation-timing: 0.4s;
  --panel-width: 300px;

  will-change: transform;
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

  &[open] {
    animation: ${slideIn} var(--animation-timing) ease-out forwards;

    ::backdrop {
      animation: ${backdropFadeIn} var(--animation-timing) ease-out forwards;
    }
  }
`;
