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
};

export const ContentMap = ({
  content,
  showPanel,
  addToPracticePlan,
  area,
}: ContentMapProps) => {
  const paddingLeft = 25;
  const paddingRight = 25;
  const rectHeight = 100;
  const rectWidth = 100;
  const windowWidth = window.innerWidth - 300;

  const svgWidth = windowWidth - (paddingLeft + paddingRight);

  const mapIndexToXCoords = (index: number): number => {
    const center = 0.5 * svgWidth - 0.5 * rectWidth + paddingLeft;
    const left = paddingLeft;
    const right = svgWidth + paddingLeft - (rectWidth + paddingRight);

    // TODO: fix this so it is a function
    const lookUpTable = {
      0: center,
      1: center,
      2: left,
      3: left,
      4: center,
      5: right,
      6: right,
      7: center,
      8: left,
      9: left,
      10: center,
      11: right,
      12: right,
      13: center,
      14: left,
      15: left,
      16: center,
    };
    return lookUpTable[index];
  };

  return (
    <svg
      height={110 * (content.length + 2)}
      width={windowWidth}
    >
      {content.map((position: PositionProps, idx: number) => (
        <SVGRect
          index={idx}
          height={rectHeight}
          width={rectWidth}
          y={idx * 110}
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
};
