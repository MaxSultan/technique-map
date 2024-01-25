import React, { useState, useRef } from "react";
import styled,{
  keyframes
} from 'styled-components';

/**
How do we model the skills, positions, knowledge, competencies,etc that you need to be good at for wrestling 
How do we then turn that into a system?
What is the framework for building wrestling competency?
Wrestlers need to develop a set of skills, strength and conditioning, beliefs and attitudes

3 areas - top, bottom, neutral
positions make an area - bottom (base, belly, bottom, back)
move - a way to score points or change position

when someone does a move different than the way we teach it we say they have bad technique
when someone doesnt know the move they have no technique in that area
someone good at wrestling understands the following things in a position
1. what moves they have available
2. what the opponent has available
3. what "look" they need for a certain move to be effective
4. How to defend the opponents moves from this position
5. What comes next from a certain move and all previous for what comes next

Fundamentals - 20% of wrestling that makes up 80% of the wrestling that you see
neutral - 

handfighting:
- changing ties
- elbow pass
- pummel inside
- slide by
- duck under
- wrist snap

ties:
- inside tie
- outside tie
- collar tie
- russian tie
- underhook
- overhook
- under/over
- double unders

leg attacks:
- single leg 
- double leg
- high c
- low single

finishes:
- high c 
  - crackdown
  - corner and run
  - snake
- single
  - on feet
     - lift and sweep
     - turn knee down double
     - jump rope
     - run the pipe
  - on the mat
     - chase corner
     - waterfall
- double 
  - blast double
  - corner and run
- low single
  - throw hand to hip and circle
  - waterfall
    - isolate one, swing to hip, scoop the leg, clear your head
    
throws:
- over under
- headlock

defense
 - sprawl and square up
 - whizzer

bottom

- base
  - hold a base
  - clear a cross wrist
  - clear a near wrist
  - chicken wing defense
  - half defense
  - cradle defense
  - leg ride defense
  - stand up
  - switch
  - sit out
  
- belly
  - base up
- back
  - arm across my belly (half)
  - arm to the hip pocket (headlock)
- butt
  - turn in
  - clear seal hip heist
  - head gizzoni
- feet
 - break grip
 - not get lifted
 
 
top:
 

*/

const backdropFadeIn = keyframes`
 from {
     display:none;
     background-color: rgb(0 0 0 / 0);
  }
  
  to {
     display:block;
     background-color: rgb(0 0 0 / 0.25);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(0%);
  }

  to {
    opacity: 1;
    transform: translateX(-100%);
  }
`;


const Panel = styled.dialog`
  --animation-timing: 0.4s;
  --panel-width: 300px;

  will-change: transform;
  transform-origin: right center;

  border: none;
  inset: unset;

  min-height: 100%;
  width: var(--panel-width);

  position: fixed;
  top: 0;
  right: calc(-1 * var(--panel-width));
  padding: 0;

  background-color: var(--primary);

  &[open] {
    animation: ${slideIn} var(--animation-timing) ease-out forwards;

    ::backdrop {
      animation: ${backdropFadeIn} var(--animation-timing) ease-out forwards;
    }
  }
`;

const Tabs = styled(({ tabs, currentTab, setCurrentTab, className }) => (
  <div className={className}>
    {tabs.map((tab) => (
      <div onClick={() => setCurrentTab(tab.name)}>
        <span>{tab.name}</span>
      </div>
    ))}
  </div>
))`
  backdrop-filter: blur(6px);
  position: fixed;
  bottom: 0px;
  display: flex;
  gap: 1px;

  & > div {
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid black;
    padding: 16px 32px;
    transform: skewX(-20deg);
    text-transform: capitalize;
  }

  & > div > span {
    display: inline-block;
    transform: skewX(20deg);
  }
`;

const SVGRect = ({ text, height, width, x, y, onClick, index }) => {
  return (
    <>
      <rect
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
const PanelList = styled.ul`
  display: grid;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
`;

const PanelItem = styled.li`
  list-style: none;
  padding: 16px 32px;
  background-color: var(--secondary);
  color: white;

  &:not(&:last-of-type, &:hover) {
    border-bottom: 2px solid var(--primary);
  }
  
  &:hover {
    border-bottom: 2px solid var(--highlight);
  }
  
  --border-radius: 16px; 

  &:first-of-type {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
  
  &:last-of-type {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  

`;

const ContentMap = ({ content, showPanel }) => {
  const paddingLeft = 100;
  const paddingRight = 100;
  const rectHeight = 100;
  const rectWidth = 100;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const svgWidth = windowWidth - (paddingLeft + paddingRight);

  const mapIndexToXCoords = (index) => {
    const center = 0.5 * svgWidth - 0.5 * rectWidth;
    const left = paddingLeft;
    const right = svgWidth + paddingLeft - (rectWidth + paddingRight);

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
      16: center
    };
    return lookUpTable[index];
  };

  return (
    <svg height={110 * (content.length + 2)} width={windowWidth}>
      {content.map((position, idx) => {
        console.log(position);
        return (
          <SVGRect
            index={idx}
            height={rectHeight}
            width={rectWidth}
            y={idx * 110}
            x={mapIndexToXCoords(idx)}
            onClick={() =>
              showPanel(() => (
                <>
                  {position?.moves.map((move) => (
                    <PanelItem>{move.name}</PanelItem>
                  ))}
                </>
              ))
            }
            text={position.name}
          />
        );
      })}
    </svg>
  );
};

const Map = () => {
  const [panelContent, setPanelContent] = useState("");
  const [currentTab, setCurrentTab] = useState("neutral");
  const panelRef = useRef();

  const LEARNING_PATHS = [{ name: "fundamentals" }];

  const POSITIONS = [
    {
      name: "neutral",
      positions: [
        {
          name: "open",
          moves: [
            { name: "double leg" },
            { name: "low single" },
            { name: "fake" },
            { name: "level change" }
          ]
        },
        { name: "short offense", moves: [] },
        { name: "russian tie", moves: [] },
        {
          name: "underhook",
          moves: [
            { name: "single" },
            { name: "fake to snap" },
            { name: "far knee blast" }
          ]
        },
        { name: "overhook", moves: [] },
        { name: "collar tie", moves: [] },
        { name: "inside tie", moves: [] },
        { name: "in on a leg", moves: [] },
        { name: "opponent in on single on mat", moves: [] },
        { name: "opponent in on single off mat", moves: [] },
        { name: "opponent in on high c on mat", moves: [] },
        { name: "opponent in on high c off mat", moves: [] },
        { name: "single leg finishes", moves: [] },
        { name: "high c finishes", moves: [] },
        { name: "low single finishes", moves: [] }
      ]
    },
    {
      name: "bottom",
      positions: [
        {
          name: "base",
          moves: [
            { name: "stand up" },
            { name: "switch" },
            { name: "change over" }
          ]
        },
        {
          name: "short sit",
          moves: [{ name: "sit out turn in series" }, { name: "head gizzoni" }]
        },
        {
          name: "belly",
          moves: [
            { name: "clear chicken wing" },
            { name: "clear half" },
            { name: "cradle defense" },
            { name: "leg ride defense" },
            { name: "clear near wrist" },
            { name: "clear cross wrist" }
          ]
        },
        {
          name: "on back",
          moves: [
            { name: "get off back (half)" },
            { name: "get off back (headlock)" }
          ]
        },
        { name: "on feet", moves: [] }
      ]
    },
    { name: "top", positions: [{ name: "on feet", moves: [] }] }
  ];

  const showPanel = (content) => {
    setPanelContent(content);
    panelRef.current?.showModal();
  };

  return (
    <span>
      <h1>{currentTab}</h1>
      <ContentMap
        content={POSITIONS.find((i) => i.name === currentTab)?.positions}
        showPanel={showPanel}
      />
      <Panel ref={panelRef}>
        <PanelList>{panelContent}</PanelList>
      </Panel>
      <Tabs
        tabs={POSITIONS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </span>
  );
};

export default Map;