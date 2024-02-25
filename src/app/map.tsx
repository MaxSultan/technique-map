
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from 'firebase/firestore';
import {
  CloseIcon,
  CopyIcon,
  TrashIcon,
  ContentMap,
  AddToPracticePlanArgs,
} from '@technique-map/map-items';
import { Panel, PanelList, Button, Tabs } from '@technique-map/design-system';
import {db} from './firebase'

const PracticePlanDisplay = styled.aside`
  background-color: var(--primary);
  color: white;
  padding: clamp(8px, 3vw, 32px);
  box-shadow: 16px 0px 16px -16px hsl(from var(--primary) h s 10%);
`;

const StyledTrashIcon = styled(TrashIcon)`
  stroke: white;
`;

const PracticePlanGroup = styled.ul`
  padding: 8px 16px;
  display: grid;
  grid-auto-flow: row;
  gap: 2px;
  background-color: var(--primary);
  max-height: 20%;
  overflow-y: auto;
  scroll-snap-type: x proximity;
`;

const PracticePlanItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 8px 16px;
  background-color: var(--secondary);
  position: relative;
`;

const IconButton = styled.button`
  border-radius: 5000px 50px 5000px 5000px;
  background: linear-gradient(var(--secondary), var(--tertiary));
  padding: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  filter: drop-shadow(2px 2px 2px hsl(from var(--primary) h s 10%));
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type Area = 'top' | 'bottom' | 'neutral';

type PositionType = { name: string; moves: { name: string }[] };

type AreaType = {
  name: Area;
  positions: PositionType[];
};

type PlanType = {
  neutral: string[];
  top: string[];
  bottom: string[];
};

const newPracticePlan = {
  date: new Date(),
  moves: [],
};

type NeutralPositions = 'open' | 'short offense' | 'underhook' | 'overhook' | 'collar tie' | 'high crotch - defense' | 'double leg - defense' | 'single leg - defense' | 'single leg on feet - defense';
type TopPositions = 'base' | 'belly' | 'on feet' | 'back';
type Positions = NeutralPositions | TopPositions;

type moves = {
  move: string,
  position: Positions,
  area: Area,
  level: 'JV' | 'Varsity' | 'State Qualifier' | 'State Placer',
  id?: string,
}

/**
  fetch moves data
 * [{
    id: 'ubajnfkajhdfosija134',
    move: 'double leg',
    position: 'open',
    area: 'neutral',
    level: 'JV',
  }, ...]
 * 
  aggregate the moves data by area
 * [{name: 'neutral', positions: new Set() }, {name: 'top', positions: new Set() }, {name: 'bottom', positions: new Set() }]
  when a user clicks on a position filter the moves by area and position and display in the panel

  when a user adds a move to a practice plan, update the data representation to include the move id
   const newPracticePlan = {
    date: new Date(),
    moves: ['ubajnfkajhdfosija134'],
  };
  AND update the UI data
  {
    neutral: [{position: 'open', moves: ['double', 'single']}, {position: 'underhook', moves: ['single', 'fake and snap']}],
    top: [],
    bottom: []
  }
 * 
 */

const positionsByArea = (arr: moves[]): {name: Area; positions: Set<any>}[] => arr.reduce((acc, val) => {
  const idx = acc.findIndex(i => i.name === val.area)
  acc[idx].positions.add(val.position)
  return acc
}, [{name: 'neutral', positions: new Set() }, {name: 'top', positions: new Set() }, {name: 'bottom', positions: new Set() }])

const Map = styled(({ className }) => {
  const newInitialPracticePlanState = {
    date: new Date(), // TODO: update this so a user can select a date
    moves: ['ubajnfkajhdfosija134'],
  };
  const initialPracticePlanState = { neutral: [], top: [], bottom: [] };
  const [panelContent, setPanelContent] = useState('');
  const [currentTab, setCurrentTab] = useState<Area>('neutral');
  const [practicePlan, setPracticePlan] = useState<PlanType>(
    initialPracticePlanState
  );
  const [moves, setMoves] = useState<moves[]>([])
  const panelRef = useRef<HTMLDialogElement | undefined>();

  const getData = () => getDocs(collection(db, 'moves')).then((querySnapshot) => {
    const newData = querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id }))
    setMoves(newData); 
    console.log(newData)
});

useEffect(() => {
  getData();
}, [])

  const showPanel = (content: any) => {
    setPanelContent(content);
    panelRef.current?.showModal();
  };

  const clearPracticePlan = () => {
    setPracticePlan(initialPracticePlanState);
  };

  const addToPracticePlan = ({
    position,
    move,
    area,
  }: AddToPracticePlanArgs) => {
    setPracticePlan((prev) => ({
      ...prev,
      [area]: [...prev[area], ...(prev[area].includes(move) ? [] : [move])],
    }));
  };

  const removeFromPracticePlan = (
    area: Area,
    item: string
  ) => {
    setPracticePlan((prev) => ({
      ...prev,
      [area]: prev[area].filter((i) => i !== item),
    }));
  };

  const copyPracticePlan = () => {
    window.navigator.clipboard.writeText(JSON.stringify(practicePlan));
  };

  return (
    <main className={className}>
      <PracticePlanDisplay>
        Practice Plan
        <br />
        neutral
        <PracticePlanGroup>
          {practicePlan.neutral.map((i) => (
            <PracticePlanItem key={i}>
              {i}
              <IconButton onClick={() => removeFromPracticePlan('neutral', i)}>
                <CloseIcon />
              </IconButton>
            </PracticePlanItem>
          ))}
        </PracticePlanGroup>
        bottom
        <PracticePlanGroup>
          {practicePlan.bottom.map((i) => (
            <PracticePlanItem key={i}>
              {i}
              <IconButton onClick={() => removeFromPracticePlan('bottom', i)}>
                <CloseIcon />
              </IconButton>
            </PracticePlanItem>
          ))}
        </PracticePlanGroup>
        top
        <PracticePlanGroup>
          {practicePlan.top.map((i) => (
            <PracticePlanItem key={i}>
              {i}
              <IconButton onClick={() => removeFromPracticePlan('top', i)}>
                <CloseIcon />
              </IconButton>
            </PracticePlanItem>
          ))}
        </PracticePlanGroup>
        <Button
          onClick={clearPracticePlan}
          text="Clear Practice Plan"
          Icon={StyledTrashIcon}
          $level="caution"
        />
        <Button
          onClick={copyPracticePlan}
          text="Copy Practice Plan"
          Icon={CopyIcon}
        />
      </PracticePlanDisplay>
      {/* @ts-ignore:next-line */}
      <ContentMap
        addToPracticePlan={addToPracticePlan}
        /* @ts-ignore:next-line */
        content={[...positionsByArea(moves).find((i) => i.name === currentTab).positions]}
        showPanel={showPanel}
        area={currentTab}
        moves={moves}
      />
      <Panel ref={panelRef}>
        <PanelList>{panelContent}</PanelList>
      </Panel>
      <Tabs
        tabs={positionsByArea(moves).map((i) => i.name)}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </main>
  );
})`
  display: grid;
  grid-template-areas: 'nav nav' 'plan content';
  grid-template-columns: min(236px, 25%) 1fr;
  grid-template-rows: fit-content 1fr;

  & > ${PracticePlanDisplay} {
    grid-area: plan;
    position: sticky;
    top: 0;
    max-height: 100vh;
    box-sizing: border-box;
  }
`;

export default Map;
