import styled from 'styled-components';
import { SVGCircle } from './svg-circle';
import { PanelItem } from '@technique-map/design-system';

export type AddToPracticePlanArgs = {
  position: string;
  move: string;
  area: 'top' | 'bottom' | 'neutral';
};

type ContentMapProps = {
  area: 'top' | 'bottom' | 'neutral';
  addToPracticePlan: ({ position, move, area }: AddToPracticePlanArgs) => void;
  showPanel: (arg0: Function) => void;
  content: string[];
  className: string;
  moves: any[]; // TODO: fix this
};

const Line = styled.line`
  stroke: var(--orange);
`;

export const ContentMap = styled(
  ({
    className,
    content,
    showPanel,
    addToPracticePlan,
    area,
    moves,
  }: ContentMapProps) => {
    const circleRadius = 50;
    const marginTop = 70;

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
        height={Math.max(110 * (content.length + 2), window.innerHeight - 52)}
        width="100%"
        className={className}
      >
        {content.map((position: string, idx: number) => (
          <g key={position}>
            <Line
              x1={mapIndexToRelativeXCoord(idx)}
              y1={marginTop + idx * 110}
              x2={mapIndexToRelativeXCoord(idx + 1)}
              y2={marginTop + (idx + 1) * 110}
            ></Line>
            <SVGCircle
              key={`${idx}-svgRect`}
              index={idx}
              r={circleRadius}
              y={marginTop + idx * 110}
              x={mapIndexToRelativeXCoord(idx)}
              onClick={() =>
                showPanel(() => (
                  <>
                    {moves.filter(i => i.area === area && i.position === position).map(({ name }, idx) => (
                      <PanelItem
                      key={`${area}-${position}-${name}`}
                        addToPracticePlan={() =>
                          addToPracticePlan({
                            position: position,
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
              text={position}
            />
          </g>
        ))}
      </svg>
    );
  }
)`
  background-color: var(--primary);
`;
