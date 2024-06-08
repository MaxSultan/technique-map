import styled from 'styled-components';

const ProgressBar = styled(({
  width,
  height,
  className,
  percentage
}: {
  width: number;
  height: number;
  className?: string;
  percentage: number;
}) => (
    <rect
      className={className}
      width={width}
      fill="var(--affirmative)"
      height={height}
      rx={4}
      ry={4}
    ></rect>
  ))`
    transform: ${props => `scaleX(${props.percentage})`};
    transition: transform 300ms;
  `;

const ProgressGroup = styled.g``;

const TotalBar = styled.rect`
  fill: var(--gray200);
`;

export const ProgressChart = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  const margin = {
    top: 50,
    bottom: 50,
    left: 25,
    right: 25,
  };

  const svgHeight = 150;
  const svgWidth = 400;

  const height = svgHeight - (margin.top + margin.bottom);
  const width = svgWidth - (margin.left + margin.right);

  console.log(current/total)

  return (
    <svg
      height={svgHeight}
      width={svgWidth}
      id="svg"
    >
      <ProgressGroup
        transform={`translate(${margin.left}, ${margin.top})`}
        className="progress-group"
        width={width}
        height={height}
      >
        <TotalBar
          x="0"
          y="0"
          height={height}
          width={width}
          rx={4}
          ry={4}
        ></TotalBar>
        <ProgressBar
          width={width}
          height={height}
          percentage={current/total > 0 ? current/total : 0}
        />
      </ProgressGroup>
    </svg>
  );
};
