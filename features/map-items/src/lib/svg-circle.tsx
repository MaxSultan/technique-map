import styled from 'styled-components';

type SVGCircleProps = {
  className?: string;
  text: string;
  x: string;
  y: number;
  onClick: () => void;
  index: number;
  r: number;
};

export const SVGCircle = styled(
  ({ className, text, x, y, r, onClick, index }: SVGCircleProps) => {
    return (
      <g
        onClick={onClick}
        className={className}
      >
        <circle
          r={r + 5}
          cy={y}
          cx={x}
        ></circle>
        <circle
          className={className}
          r={r}
          cy={y}
          cx={x}
        ></circle>
        <text
          x={x}
          y={y}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {text}
        </text>
      </g>
    );
  }
)`
  & > circle {
    fill: var(--orange);
    stroke-width: 2px;

    &:last-of-type {
      stroke: white;
    }

    &:first-of-type {
      stroke: transparent;
      filter: blur(2px);
    }
  }

  & > text {
    fill: white;
  }
`;
