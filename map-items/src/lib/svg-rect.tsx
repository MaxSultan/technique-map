import styled from "styled-components";

type SVGRectProps = {
  className?: string;
  text: string;
  x: number;
  y: number;
  onClick: () => void;
  index: number;
  r: number,
};

export const SVGRect = styled(({
  className,
  text,
  x,
  y,
  r,
  onClick,
  index,
}: SVGRectProps) => {
  return (
    <g onClick={onClick} className={className}>
      <circle
        key={index}
        r={r + 5}
        cy={y + r}
        cx={x + r}
      >
      </circle>
      <circle
        className={className}
        key={index}
        r={r}
        cy={y + r}
        cx={x + r}
      >
      </circle>
      <text
        x={x + r}
        y={y + r}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {text}
      </text>
    </g>
  );
})`
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
