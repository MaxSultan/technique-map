import styled from 'styled-components';

export const Tag = styled.div<{
  $color?: string;
}>`
  color: ${({ $color }) => $color};
  border-radius: 20em;
  background-color: transparent;
  border-color: currentColor;
  text-transform: uppercase;
  border: 2px solid;
  width: min-content;
  padding: 4px 8px;
  white-space: nowrap;
`;
