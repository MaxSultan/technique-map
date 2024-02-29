import styled from 'styled-components';

export const Details = styled(({ className, children, title, ...rest }) => {
  return (
    <details
      className={className}
      {...rest}
    >
      <summary>{title}</summary>
      {children}
    </details>
  );
})`
  background-color: var(--primary);
  color: white;
  padding: 8px;
`;
