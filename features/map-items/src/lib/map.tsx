import {
  useState,
  useEffect,
  Fragment,
  useLayoutEffect,
  useContext,
} from 'react';
import styled from 'styled-components';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  where,
  query,
} from 'firebase/firestore';
import { ContentMap } from './content-map';
import {
  Button,
  Tabs,
  Details,
  SaveIcon,
  CloseIcon,
  CopyIcon,
  TrashIcon,
  BookIcon,
  ToastContext,
  ToastContextType,
  PanelContext,
  PanelContextType,
  Panel,
} from '@technique-map/design-system';
import { db } from '@technique-map/firebase';
import { NavigateFunction, useNavigate, useParams } from 'react-router';

type Area = 'top' | 'bottom' | 'neutral';

type PositionType = { name: string; moves: { name: string; id: string }[] };

export type PlanType = {
  date: Date;
  moves: string[];
  id: string;
  teamId?: string;
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

const isValidDate = (date: string | Date) => !isNaN(date as unknown as number);

export const findMoves = (moves: MoveType[], ids: string[]): MoveType[] =>
  ids.map((id) => moves.find((move) => move.id === id) as unknown as MoveType);

export const aggregateMovesByPosition = (moves: MoveType[]) =>
  moves.reduce(
    (acc, move) => ({
      ...acc,
      [move?.area]: [
        ...(acc[move?.area] ?? []).filter(
          (obj: { name: string }) => obj.name !== move?.position
        ),
        {
          name: move?.position,
          moves: [
            ...((
              (acc[move?.area] ?? []).find(
                (obj: { name: string; moves: MoveType[] }) =>
                  obj.name === move?.position
              ) as unknown as PositionType
            )?.moves ?? []),
            { name: move?.name, id: move?.id },
          ],
        },
      ],
    }),
    { neutral: [], top: [], bottom: [] }
  );

type PositionByAreaType = { name: Area; positions: Set<any> };

const positionsByArea = (arr: MoveType[]): PositionByAreaType[] =>
  arr.reduce(
    (acc, val) => {
      const index = acc.findIndex((i) => i.name === val.area);
      acc[index].positions.add(val.position);
      return acc;
    },
    [
      { name: 'neutral', positions: new Set() },
      { name: 'top', positions: new Set() },
      { name: 'bottom', positions: new Set() },
    ]
  );

const copyPracticePlan = (moves: MoveType[], practicePlanMoves: string[]) =>
  window.navigator.clipboard.writeText(
    JSON.stringify(
      aggregateMovesByPosition(findMoves(moves, practicePlanMoves))
    )
  );

const savePracticePlan = async (
  practicePlan: Pick<PlanType, 'date' | 'moves' | 'teamId'>,
  navigator: NavigateFunction
) => {
  if (!isValidDate(practicePlan.date)) {
    alert('please submit a valid date'); // TODO: make this a toast
    return;
  }
  await addDoc(collection(db, 'practice_plan'), practicePlan).then((res) => {
    navigator(`/teams/${practicePlan.teamId}/practice_plans/${res.id}`);
  });
};

const updatePracticePlan = async (
  id: string,
  practicePlan: Pick<PlanType, 'date' | 'moves' | 'teamId'>,
  navigator: NavigateFunction
) => {
  const practicePlanRef = doc(db, 'practice_plan', id);
  if (!isValidDate(practicePlan.date)) {
    alert('please submit a valid date');
    return;
  }
  await updateDoc(practicePlanRef, practicePlan);
  navigator(`/teams/${practicePlan.teamId}/practice_plans/${id}`);
};

const ScrollContainer = styled.div`
  height: 100%;
  overflow: scroll;
`;

const Actions = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
`;

const DatePicker = styled.input``;

const PracticePlanDisplay = styled(
  ({
    className,
    moves,
    practicePlanMoves,
    practicePlanDate,
    removeFromPracticePlan,
    clearPracticePlan,
    currentPracticePlanId,
    updatePracticePlanDate,
    teamId,
  }) => {
    const navigator = useNavigate();
    const [transform, setTransform] = useState<boolean>(
      window.innerWidth > 850
    );
    const { closePanel } = useContext(PanelContext) as PanelContextType;

    useEffect(() => {
      return () => closePanel();
    }, []);

    const listenForResize = () => {
      if (window.innerWidth > 850) setTransform(true);
    };

    useLayoutEffect(() => {
      window.addEventListener('resize', listenForResize);

      return () => {
        window.removeEventListener('resize', listenForResize);
      };
    }, []);

    const handleShowPracticePlanClick = () => {
      setTransform((prev) => !prev);
    };

    const formatPracticePlanDate = (date: string) => {
      const [year, month, day] = date.split('-');
      return new Date(`${month}/${day}/${year}`);
    };

    return (
      <aside
        className={className}
        style={
          {
            '--transform': transform ? 'translateX(0%)' : 'translateX(-100%)',
          } as React.CSSProperties
        }
      >
        <button
          aria-label="show practice plan"
          onClick={handleShowPracticePlanClick}
        >
          <BookIcon />
        </button>
        <ScrollContainer>
          Date:
          <DatePicker
            type="date"
            value={practicePlanDate}
            onChange={(event) => updatePracticePlanDate(event.target.value)}
          />
          <h1>Practice Plan</h1>
          {Object.entries(
            aggregateMovesByPosition(findMoves(moves, practicePlanMoves))
          ).map(([key, value]) => (
            <Fragment key={key}>
              <h2>{key}</h2>
              {value.map((position: PositionType) => (
                <Details
                  title={position.name}
                  key={position.name}
                >
                  {position.moves.map(({ name: moveName, id }) => (
                    <PracticePlanItem key={`${position.name}=${moveName}`}>
                      {moveName}
                      <IconButton onClick={() => removeFromPracticePlan(id)}>
                        <CloseIcon />
                      </IconButton>
                    </PracticePlanItem>
                  ))}
                </Details>
              ))}
            </Fragment>
          ))}
          <Actions>
            {!currentPracticePlanId && (
              <Button
                onClick={clearPracticePlan}
                text="Clear Practice Plan"
                Icon={StyledTrashIcon}
                $level="caution"
              />
            )}
            <Button
              onClick={() => copyPracticePlan(moves, practicePlanMoves)}
              text="Copy Practice Plan"
              Icon={CopyIcon}
            />
            <Button
              onClick={() => {
                currentPracticePlanId
                  ? updatePracticePlan(
                      currentPracticePlanId,
                      {
                        moves: practicePlanMoves,
                        date: formatPracticePlanDate(practicePlanDate),
                        teamId: teamId,
                      },
                      navigator
                    )
                  : savePracticePlan(
                      {
                        moves: practicePlanMoves,
                        date: formatPracticePlanDate(practicePlanDate),
                        teamId: teamId,
                      },
                      navigator
                    );
              }}
              text={
                currentPracticePlanId
                  ? 'Update Practice Plan'
                  : 'Save Practice Plan'
              }
              Icon={SaveIcon}
            />
          </Actions>
        </ScrollContainer>
      </aside>
    );
  }
)`
  background: var(--gray100);
  color: white;
  padding: clamp(8px, 3vw, 32px);
  box-shadow: var(--shadow-elevation-high);
  transition: transform 300ms;
  transform: var(--transform);
  display: flex;
  flex-direction: column;

  & > button[aria-label='show practice plan'] {
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 32px;
    position: fixed;
    right: 0;
    top: 154px;
    background-color: var(--secondary);
    color: white;
    border: none;
    box-shadow: var(--shadow-elevation-medium);
    cursor: pointer;
    transform: translateX(90%);
    @media screen and (width >= 850px) {
      display: none;
    }
  }
`;

const StyledTrashIcon = styled(TrashIcon)`
  stroke: white;
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

const normalizePracticePlanDate = (date: Date) => {
  const [month, day, year] = new Date(date)
    .toLocaleDateString('en-US')
    .split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

const useExistingPracticePlanData = (
  currentPracticePlanId: string | undefined
): [
  string[],
  React.Dispatch<React.SetStateAction<any>>,
  Date | string,
  React.Dispatch<React.SetStateAction<any>>
] => {
  const [practicePlanMoves, setPracticePlanMoves] = useState<string[]>([]);
  const [practicePlanDate, setPracticePlanDate] = useState<string | Date>(
    normalizePracticePlanDate(new Date())
  );

  useEffect(() => {
    if (currentPracticePlanId) {
      const getPracticePlanData = () =>
        getDoc(doc(db, 'practice_plan', currentPracticePlanId)).then(
          (querySnapshot) => {
            const newData = {
              ...querySnapshot.data(),
              id: querySnapshot.id,
            };

            setPracticePlanDate(
              normalizePracticePlanDate(
                new Date(
                  Number(
                    (newData as { id: string; date: { seconds: string } }).date
                      .seconds
                  ) * 1000
                )
              )
            );
            setPracticePlanMoves((newData as PlanType).moves);
          }
        );

      getPracticePlanData();
    }
  }, [currentPracticePlanId]);

  return [
    practicePlanMoves,
    setPracticePlanMoves,
    practicePlanDate,
    setPracticePlanDate,
  ];
};

const getData = (teamId: string) =>
  getDocs(query(collection(db, 'moves'), where('teamId', '==', teamId))).then(
    (querySnapshot) =>
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
  );

const MapTabs = styled(Tabs)`
  grid-area: nav;
  position: sticky;
  bottom: 0;
`;

export const Map = styled(({ className }) => {
  const [currentTab, setCurrentTab] = useState<Area>('neutral');
  const [moves, setMoves] = useState<MoveType[]>([]);
  const { addToast, removeToast } = useContext(
    ToastContext
  ) as ToastContextType;

  const { practice_plan_id: currentPracticePlanId, id: teamId = '' } =
    useParams();

  const [
    practicePlanMoves,
    setPracticePlanMoves,
    practicePlanDate,
    setPracticePlanDate,
  ] = useExistingPracticePlanData(currentPracticePlanId);

  useEffect(() => {
    getData(teamId).then((newData) =>
      setMoves(newData as unknown as MoveType[])
    );
  }, [teamId]);

  const clearPracticePlan = () => {
    setPracticePlanDate(new Date());
    setPracticePlanMoves([]);
    addToast({
      variant: 'success',
      message: 'practice plan cleared',
      onClose: () => removeToast('practice plan cleared'),
    });
  };

  const addToPracticePlan = (id: string) => {
    setPracticePlanMoves((prev: string[]) => {
      if (prev.includes(id)) {
        addToast({
          variant: 'error',
          message: 'move already exists',
          onClose: () => removeToast('move already exists'),
        });
        return prev;
      }
      addToast({
        variant: 'success',
        message: 'move was successfully added',
        onClose: () => removeToast('move was successfully added'),
      });
      return [...prev, id];
    });
  };

  const removeFromPracticePlan = (id: string) => {
    setPracticePlanMoves((prev: string[]) => [...prev].filter((i) => i !== id));
    addToast({
      variant: 'success',
      message: 'move was successfully removed',
      onClose: () => removeToast('move was successfully removed'),
    });
  };

  const updatePracticePlanDate = (date: Date) => {
    setPracticePlanDate(date);
    addToast({
      variant: 'success',
      message: 'practice plan date updated',
      onClose: () => removeToast('practice plan date updated'),
    });
  };

  return (
    <main className={className}>
      <PracticePlanDisplay
        moves={moves}
        practicePlanMoves={practicePlanMoves}
        practicePlanDate={practicePlanDate}
        clearPracticePlan={clearPracticePlan}
        removeFromPracticePlan={removeFromPracticePlan}
        currentPracticePlanId={currentPracticePlanId}
        updatePracticePlanDate={updatePracticePlanDate}
        teamId={teamId}
      />
      <ContentMap
        addToPracticePlan={addToPracticePlan}
        content={[
          ...(
            positionsByArea(moves).find(
              (i) => i.name === currentTab
            ) as PositionByAreaType
          ).positions,
        ]}
        area={currentTab}
        moves={moves}
      />
      <MapTabs
        tabs={positionsByArea(moves).map((i) => i.name)}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </main>
  );
})`
  display: grid;
  grid-template-areas: 'content' 'nav';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr fit-content;

  @media screen and (width >= 850px) {
    grid-template-areas: 'plan content' 'nav nav';
    grid-template-columns: min(300px, 75%) 1fr;
  }

  & > ${PracticePlanDisplay} {
    grid-area: plan;
    position: sticky;
    top: 0;
    height: 100svh;
    box-sizing: border-box;
    background-color: var(--blue500);

    @media screen and (width <= 850px) {
      position: fixed;
      left: 0;
      width: 75vw;
    }
  }

  :root {
    ${Panel} {
      background-color: red !important;
    }
  }
`;
