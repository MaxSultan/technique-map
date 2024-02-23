import { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  CloseIcon,
  CopyIcon,
  TrashIcon,
  ContentMap,
  AddToPracticePlanArgs,
} from '@technique-map/map-items';
import { Panel, PanelList, Button, Tabs } from '@technique-map/design-system';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

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

const Map = styled(({ className }) => {
  const initialPracticePlanState = { neutral: [], top: [], bottom: [] };
  const [panelContent, setPanelContent] = useState('');
  const [currentTab, setCurrentTab] = useState<Area>('neutral');
  const [practicePlan, setPracticePlan] = useState<PlanType>(
    initialPracticePlanState
  );
  const panelRef = useRef<HTMLDialogElement | undefined>();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'practice_plan'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  const data = getData();

  const AREA: AreaType[] = [
    {
      name: 'neutral',
      positions: [
        {
          name: 'open',
          moves: [
            { name: 'double leg' },
            { name: 'low single' },
            { name: 'fake' },
            { name: 'level change' },
          ],
        },
        { name: 'short offense', moves: [] },
        { name: 'russian tie', moves: [] },
        {
          name: 'underhook',
          moves: [
            { name: 'single' },
            { name: 'fake to snap' },
            { name: 'far knee blast' },
          ],
        },
        { name: 'overhook', moves: [{ name: 'headlock' }] },
        { name: 'collar tie', moves: [] },
        { name: 'inside tie', moves: [] },
        { name: 'in on a leg', moves: [] },
        { name: 'opponent in on single on mat', moves: [] },
        { name: 'opponent in on single off mat', moves: [] },
        { name: 'opponent in on high c on mat', moves: [] },
        { name: 'opponent in on high c off mat', moves: [] },
        { name: 'single leg finishes', moves: [] },
        { name: 'high c finishes', moves: [] },
        { name: 'low single finishes', moves: [] },
      ],
    },
    {
      name: 'bottom',
      positions: [
        {
          name: 'base',
          moves: [
            { name: 'stand up' },
            { name: 'switch' },
            { name: 'change over' },
          ],
        },
        {
          name: 'short sit',
          moves: [{ name: 'sit out turn in series' }, { name: 'head gizzoni' }],
        },
        {
          name: 'belly',
          moves: [
            { name: 'clear chicken wing' },
            { name: 'clear half' },
            { name: 'cradle defense' },
            { name: 'leg ride defense' },
            { name: 'clear near wrist' },
            { name: 'clear cross wrist' },
          ],
        },
        {
          name: 'on back',
          moves: [
            { name: 'get off back (half)' },
            { name: 'get off back (headlock)' },
          ],
        },
        { name: 'on feet', moves: [] },
      ],
    },
    { name: 'top', positions: [{ name: 'on feet', moves: [] }] },
  ];

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
    area: 'neutral' | 'top' | 'bottom',
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
            <PracticePlanItem>
              {i}{' '}
              <IconButton onClick={() => removeFromPracticePlan('neutral', i)}>
                <CloseIcon />
              </IconButton>
            </PracticePlanItem>
          ))}
        </PracticePlanGroup>
        bottom
        <PracticePlanGroup>
          {practicePlan.bottom.map((i) => (
            <PracticePlanItem>
              {i}{' '}
              <IconButton onClick={() => removeFromPracticePlan('bottom', i)}>
                <CloseIcon />
              </IconButton>
            </PracticePlanItem>
          ))}
        </PracticePlanGroup>
        top
        <PracticePlanGroup>
          {practicePlan.top.map((i) => (
            <PracticePlanItem>
              {i}{' '}
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
        content={AREA.find((i) => i.name === currentTab).positions}
        showPanel={showPanel}
        area={currentTab}
      />
      <Panel ref={panelRef}>
        <PanelList>{panelContent}</PanelList>
      </Panel>
      <Tabs
        tabs={AREA.map((i) => i.name)}
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
