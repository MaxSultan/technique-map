type SVGRectProps = {
  text: string;
  height: number;
  width: number;
  x: number;
  y: number;
  onClick: () => void;
  index: number;
};

export const SVGRect = ({
  text,
  height,
  width,
  x,
  y,
  onClick,
  index,
}: SVGRectProps) => {
  return (
    <>
      <rect
        key={index}
        height={height}
        width={width}
        y={y}
        x={x}
        stroke="black"
        fill="transparent"
        onClick={onClick}
      ></rect>
      <text
        x={x + width / 2}
        y={y + height / 2}
        dominant-baseline="middle"
        text-anchor="middle"
        onClick={onClick}
      >
        {text}
      </text>
    </>
  );
};
