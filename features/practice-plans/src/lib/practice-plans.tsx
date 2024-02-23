import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PracticePlansProps {}

const StyledPracticePlans = styled.div`
  color: pink;
`;

export function PracticePlans(props: PracticePlansProps) {
  return (
    <StyledPracticePlans>
      <h1>Welcome to PracticePlans!</h1>
    </StyledPracticePlans>
  );
}
