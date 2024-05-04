import styled from 'styled-components';
import { CloseIcon } from './icons/close-icon';

export const FormModal = styled(
  ({ passedRef, className, children, onClose }) => {
    return (
      <dialog
        ref={passedRef}
        className={className}
      >
        <button
          onClick={onClose}
          formNoValidate
        >
          <CloseIcon />
        </button>
        {children}
      </dialog>
    );
  }
)`
  border: none;
  border-radius: 16px;
  --shadow-color: var(--blue900);
  filter: drop-shadow(1px 2px 8px var(--shadow-color));
  position: relative;
  overflow: visible;

  & > button:has(> svg) {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transform: translate(50%, -50%);
    aspect-ratio: 1/1;
  }
`;
