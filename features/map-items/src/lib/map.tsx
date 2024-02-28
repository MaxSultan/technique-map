import { useState, useRef, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import {
  CloseIcon,
  CopyIcon,
  TrashIcon,
  ContentMap,
  SaveIcon,
} from '@technique-map/map-items';
import { Panel, PanelList, Button, Tabs } from '@technique-map/design-system';
// @ts-ignore next-line
import { db } from '../../../../src/app/firebase';

type Area = 'top' | 'bottom' | 'neutral';

type PositionType = { name: string; moves: { name: string; id: string }[] };

export type PlanType = {
  date: Date;
  moves: string[];
};

type NeutralPositions =
  | 'open'
  | 'short offense'
  | 'underhook'
  | 'overhook'
  | 'collar tie'
  | 'high crotch - defense'
  | 'double leg - defense'
  | 'single leg - defense'
  | 'single leg on feet - defense';
type TopPositions = 'base' | 'belly' | 'on feet' | 'back';
type Positions = NeutralPositions | TopPositions;

export type MoveType = {
  name: string;
  position: Positions;
  area: Area;
  level: 'JV' | 'Varsity' | 'State Qualifier' | 'State Placer';
  id: string;
};

export const findMoves = (moves: MoveType[], ids: string[]): MoveType[] =>
  ids.map((id) => moves.find((move) => move.id === id) as unknown as MoveType);

export const aggregateMovesByPosition = (moves: MoveType[]) =>
  moves.reduce(
    (acc, { area, position, name, id }) => ({
      ...acc,
      [area]: [
        ...acc[area].filter((obj: { name: string }) => obj.name !== position),
        {
          name: position,
          moves: [
            ...((
              acc[area].find(
                (obj: { name: string; moves: MoveType[] }) =>
                  obj.name === position
              ) as unknown as PositionType
            )?.moves ?? []),
            { name, id },
          ],
        },
      ],
    }),
    { neutral: [], top: [], bottom: [] }
  );

const positionsByArea = (
  arr: MoveType[]
): { name: Area; positions: Set<any> }[] =>
  arr.reduce(
    (acc, val) => {
      const idx = acc.findIndex((i) => i.name === val.area);
      acc[idx].positions.add(val.position);
      return acc;
    },
    [
      { name: 'neutral', positions: new Set() },
      { name: 'top', positions: new Set() },
      { name: 'bottom', positions: new Set() },
    ]
  );

const savePracticePlan = async (practicePlan: PlanType) => {
  await addDoc(collection(db, 'practice_plan'), practicePlan);
  alert('added practice plan');
};

const copyPracticePlan = (moves: MoveType[], practicePlanMoves: string[]) =>
  window.navigator.clipboard.writeText(
    JSON.stringify(
      aggregateMovesByPosition(findMoves(moves, practicePlanMoves))
    )
  );

const PracticePlanDisplay = styled(
  ({
    className,
    moves,
    practicePlan,
    removeFromPracticePlan,
    clearPracticePlan,
  }) => {
    return (
      <aside className={className}>
        Practice Plan
        <br />
        neutral
        <br />
        {aggregateMovesByPosition(
          findMoves(moves, practicePlan.moves)
        ).neutral.map((position: PositionType) => (
          <Fragment key={position.name}>
            {position.name}
            <PracticePlanGroup>
              {position.moves.map(({ name: moveName, id }) => (
                <PracticePlanItem key={`${position.name}=${moveName}`}>
                  {moveName}
                  <IconButton onClick={() => removeFromPracticePlan(id)}>
                    <CloseIcon />
                  </IconButton>
                </PracticePlanItem>
              ))}
            </PracticePlanGroup>
          </Fragment>
        ))}
        bottom
        <br />
        {aggregateMovesByPosition(
          findMoves(moves, practicePlan.moves)
        ).bottom.map((position: PositionType) => (
          <Fragment key={position.name}>
            {position.name}
            <PracticePlanGroup>
              {position.moves.map(({ name: moveName, id }) => (
                <PracticePlanItem key={`${position.name}=${moveName}`}>
                  {moveName}
                  <IconButton onClick={() => removeFromPracticePlan(id)}>
                    <CloseIcon />
                  </IconButton>
                </PracticePlanItem>
              ))}
            </PracticePlanGroup>
          </Fragment>
        ))}
        top
        <br />
        {aggregateMovesByPosition(findMoves(moves, practicePlan.moves)).top.map(
          (position: PositionType) => (
            <Fragment key={position.name}>
              {position.name}
              <PracticePlanGroup>
                {position.moves.map(({ name: moveName, id }) => (
                  <PracticePlanItem key={`${position.name}=${moveName}`}>
                    {moveName}
                    <IconButton onClick={() => removeFromPracticePlan(id)}>
                      <CloseIcon />
                    </IconButton>
                  </PracticePlanItem>
                ))}
              </PracticePlanGroup>
            </Fragment>
          )
        )}
        <Button
          onClick={clearPracticePlan}
          text="Clear Practice Plan"
          Icon={StyledTrashIcon}
          $level="caution"
        />
        <Button
          onClick={() => copyPracticePlan(moves, practicePlan.moves)}
          text="Copy Practice Plan"
          Icon={CopyIcon}
        />
        <Button
          onClick={() => savePracticePlan(practicePlan)}
          text="Save Practice Plan"
          Icon={SaveIcon}
        />
      </aside>
    );
  }
)`
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

export const Map = styled(({ className }) => {
  const initialPracticePlanState = {
    date: new Date(), // TODO: update this so a user can select a date
    moves: [],
  };
  const [panelContent, setPanelContent] = useState('');
  const [currentTab, setCurrentTab] = useState<Area>('neutral');
  const [practicePlan, setPracticePlan] = useState<PlanType>(
    initialPracticePlanState
  );
  const [moves, setMoves] = useState<MoveType[]>([]);
  const panelRef = useRef<HTMLDialogElement | undefined>();

  const getData = () =>
    getDocs(collection(db, 'moves')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMoves(newData as MoveType[]);
    });

  useEffect(() => {
    getData();
  }, []);

  const showPanel = (content: any) => {
    setPanelContent(content);
    console.log(panelRef.current);
    panelRef.current?.showModal();
  };

  const clearPracticePlan = () => {
    setPracticePlan(initialPracticePlanState);
  };

  const addToPracticePlan = (id: string) => {
    setPracticePlan((prev) => ({ ...prev, moves: [...prev.moves, id] }));
  };

  const removeFromPracticePlan = (id: string) => {
    setPracticePlan((prev) => ({
      ...prev,
      moves: [...prev.moves].filter((i) => i !== id),
    }));
  };

  return (
    <main className={className}>
      <PracticePlanDisplay
        moves={moves}
        practicePlan={practicePlan}
        clearPracticePlan={clearPracticePlan}
        removeFromPracticePlan={removeFromPracticePlan}
      />
      {/* @ts-ignore:next-line */}
      <ContentMap
        addToPracticePlan={addToPracticePlan}
        content={[
          /* @ts-ignore:next-line */
          ...positionsByArea(moves).find((i) => i.name === currentTab)
            .positions,
        ]}
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
