import styled from 'styled-components';
import { CloseIcon } from './icons/close-icon';

const CloseButton = styled(({ onClose, className }) => {
  return (
    <button
      onClick={onClose}
      className={className}
      formNoValidate
    >
      <CloseIcon />
    </button>
  );
})`
  display: grid;
  place-items: center;
  border-radius: 50%;
  padding: 16px;
  border: none;
  box-shadow: var(--shadow-elevation-low);

  &:active {
    box-shadow: none;
  }
`;

export const FormModal = styled(
  ({ passedRef, className, children, onClose }) => {
    return (
      <dialog
        ref={passedRef}
        className={className}
      >
        <CloseButton onClose={onClose} />
        {children}
      </dialog>
    );
  }
)`
  border: none;
  border-radius: 16px;
  box-shadow: var(--shadow-elevation-high);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;

  & > button:has(> svg) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  html:has([open]) {
    overflow: none;
  }
`;
