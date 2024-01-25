import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MapItemsProps {}

const StyledMapItems = styled.div`
  color: pink;
`;

export function MapItems(props: MapItemsProps) {
  return (
    <StyledMapItems>
      <h1>Welcome to MapItems!</h1>
    </StyledMapItems>
  );
}

export default MapItems;
