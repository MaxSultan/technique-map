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

export const ContentMap = styled(({
  className,
  content,
  showPanel,
  addToPracticePlan,
  area,
}: ContentMapProps) => {
  const paddingLeft = 50;
  const paddingRight = 50;
  const windowWidth = window.innerWidth - 300;
  const circleRadius = 50;
  const circleDiameter = 2 * circleRadius;
  const marginTop = 50;

  const svgWidth = windowWidth - (paddingLeft + paddingRight);

  const mapIndexToXCoords = (index: number): number => {
    const center = 0.5 * svgWidth - 0.5 * circleDiameter + paddingLeft;
    const left = paddingLeft;
    const right = svgWidth + paddingLeft - (circleDiameter + paddingRight);

    if (index % 3 === 1 || index === 0) return center;
    else if (index % 6 === 2 || index % 6 === 3) return left;
    else return right;
  };

  return (
    <svg
      height={110 * (content.length + 2)}
      width={windowWidth}
      className={className}
    >
      {content.map((position: PositionProps, idx: number) => (
        <SVGRect
          key={idx}
          index={idx}
          r={circleRadius}
          y={marginTop + idx * 110}
          x={mapIndexToXCoords(idx)}
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
      ))}
    </svg>
  );
})`
  background-color: var(--primary);
`;
