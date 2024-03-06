import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

export const PageLoader = styled(
  ({ className, children }: { className?: string; children: ReactNode }) => (
    <div className={className}>{children}</div>
  )
)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const spin = keyframes`
from {
  transform: rotate(0turn);
}
to {
  transform: rotate(1turn);
}
`;

export const Loader = styled(({ className }: { className?: string }) => (
  <div
    className={className}
    aria-label="loading"
  ></div>
))`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-top: 2px solid var(--secondary);

  animation: ${spin} 500ms infinite;
`;
