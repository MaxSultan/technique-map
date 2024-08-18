import styled from 'styled-components';
import * as d3 from 'd3';
import { useState } from 'react';

const ResponsiveSVG = styled.svg`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 8px var(--shadow-color));
`;

type DataItem = {
  name: string;
  value: number;
};
type DonutChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const Tooltip = ({ label, count }: { label: string; count: number }) => {
  return (
    <>
      <circle
        r={70}
        fill="white"
      ></circle>
      <text
        x={-25}
        y={0}
        stroke="black"
        transform="translateX(-50%)"
      >
        {label}
      </text>
      <text
        x={-25}
        y={0 + 20}
        stroke="black"
        transform="translateX(-50%)"
      >
        {count}
      </text>
    </>
  );
};

const HoverableSlice = styled.g`
  &:hover > path {
    transform: scale(1.1);
  }
`;

const pieGenerator = d3.pie<any, DataItem>().value((d) => d.value);

const arcs = (data: DataItem[], radius: number) => {
  const arcPathGenerator = d3.arc();
  return pieGenerator(data).map((p) => ({
    path: arcPathGenerator({
      innerRadius: 70,
      outerRadius: radius,
      startAngle: p.startAngle,
      endAngle: p.endAngle,
    }),
    ...p,
  }));
};

const calculateFillColor = (index: number) => {
  const oneBasedIndex = index + 1;
  const color = index >= 10 ? 'blue' : index >= 20 ? 'purple' : 'gray';
  return `var(--${color}${
    oneBasedIndex % 10 === 0 ? '950' : `${oneBasedIndex % 10}00`
  })`;
};

export const DoughnutChart = ({ width, height, data }: DonutChartProps) => {
  const MARGIN = 100;
  const radius = Math.min(width, height) / 2 - MARGIN;
  const DEFAULT_TOOLTIP = { label: '', count: NaN, x: 0, y: 0 };
  const [tooltipInfo, setTooltipInfo] = useState(DEFAULT_TOOLTIP);

  const handleMouseEnter =
    (item: {
      data: DataItem;
      value: number;
      index: number;
      startAngle: number;
      endAngle: number;
      padAngle: number;
      path: string | null;
    }) =>
    (event: React.MouseEvent) => {
      setTooltipInfo({
        label: item.data.name,
        count: item.data.value,
        x: event.clientX,
        y: event.clientY,
      });
    };

  return (
    <ResponsiveSVG
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${width}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {arcs(data, radius).map((arc, i) => (
          <HoverableSlice
            // @ts-expect-error -- d3 stypes do match
            d={arc.path}
            key={i}
            onMouseEnter={handleMouseEnter(arc)}
            onMouseLeave={() => setTooltipInfo(DEFAULT_TOOLTIP)}
          >
            {' '}
            <path
              // @ts-expect-error -- d3 stypes do match
              d={arc.path}
              fill={calculateFillColor(i)}
            />{' '}
          </HoverableSlice>
        ))}
        {tooltipInfo.label && (
          <Tooltip
            label={tooltipInfo.label}
            count={tooltipInfo.count}
          />
        )}
      </g>
    </ResponsiveSVG>
  );
};
