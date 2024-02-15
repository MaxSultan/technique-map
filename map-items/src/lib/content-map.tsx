import styled from 'styled-components';
import { SVGRect } from './svg-rect';
import { PanelItem } from '@technique-map/design-system';

type PositionProps = { name: string; moves: { name: string }[] };

export type AddToPracticePlanArgs = {
  position: string;
  move: string;
  area: 'top' | 'bottom' | 'neutral';
};

type ContentMapProps = {
  area: 'top' | 'bottom' | 'neutral';
  addToPracticePlan: ({ position, move, area }: AddToPracticePlanArgs) => void;
  showPanel: (arg0: Function) => void;
  content: PositionProps[];
  className: string;
};

const Line = styled.line`
  stroke: var(--orange);
`

export const ContentMap = styled(({
  className,
  content,
  showPanel,
  addToPracticePlan,
  area,
}: ContentMapProps) => {
  const circleRadius = 50;
  const marginTop = 50;

  const mapIndexToRelativeXCoord = (index: number): string => {
    const center = '50%';
    const left = '25%';
    const right = '75%';

    if (index % 3 === 1 || index === 0) return center;
    else if (index % 6 === 2 || index % 6 === 3) return left;
    else return right;
  };

  return (
    <svg
      height={110 * (content.length + 2)}
      width="100%"
      className={className}
      >
      {content.map((position: PositionProps, idx: number) => (
        <>
        <Line x1={mapIndexToRelativeXCoord(idx)} y1={marginTop + idx * 110} x2={mapIndexToRelativeXCoord(idx + 1)} y2={marginTop + (idx + 1) * 110}></Line>
        <SVGRect
          key={idx}
          index={idx}
          r={circleRadius}
          y={marginTop + idx * 110}
          x={mapIndexToRelativeXCoord(idx)}
          onClick={() =>
            showPanel(() => (
              <>
                {position?.moves.map(({ name }) => (
                  <PanelItem
                  addToPracticePlan={() =>
                    addToPracticePlan({
                      position: position.name,
                        move: name,
                        area,
                      })
                    }
                    >
                    {name}
                  </PanelItem>
                ))}
              </>
            ))
          }
          text={position.name}
          />
          </>
      ))}
    </svg>
  );
})`
  background-color: var(--primary);
`;
