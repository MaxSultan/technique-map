import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MutableRefObject,
  useContext,
} from 'react';
import styled from 'styled-components';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@technique-map/firebase';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import {
  Button,
  Loader,
  PageLoader,
  ToastContext,
  ToastContextType,
} from '@technique-map/design-system';
import { ErrorBoundary } from 'react-error-boundary';

export type PracticePlanType = {
  id: string;
  date: { seconds: string; milliseconds: string };
  moves: string[];
};

const Title = styled.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (width > 600px) {
    flex-direction: row;
  }
`;

const DeleteButton = styled.button`
  background-color: var(--caution);
  border: none;
  border-radius: 8px;
  padding: 4px 16px 4px 16px;
  cursor: pointer;
  color: white;
`;

const DeleteModal = styled(
  ({
    children,
    passedRef,
    className,
  }: {
    children: ReactNode | ReactNode[];
    passedRef: MutableRefObject<HTMLDialogElement | null>;
    className?: string;
  }) => {
    return (
      <dialog
        ref={passedRef}
        className={className}
      >
        <div>{children}</div>
      </dialog>
    );
  }
)`
  @media screen and (width > 800px) {
    width: 50%;
    height: 30%;
  }

  width: 80%;
  height: 80%;
  padding: 16px;
  border-radius: 8px;

  & > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

const PracticePlanItem = styled(
  ({
    id,
    unixTime,
    deletePracticePlan,
    className,
  }: {
    id: string;
    unixTime: string;
    deletePracticePlan: (id: string) => void;
    className?: string;
  }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const dayMonthYearFromUnixTime = (unixTime: number | string) =>
      new Date(Number(unixTime) * 1000).toLocaleDateString();

    return (
      <li className={className}>
        <Link to={`/practice_plans/${id}`}>
          {dayMonthYearFromUnixTime(unixTime)}
        </Link>
        <DeleteButton onClick={() => modalRef.current?.showModal()}>
          Delete Practice Plan
        </DeleteButton>
        <DeleteModal passedRef={modalRef}>
          Are you sure you want to delete Practice Plan from{' '}
          {dayMonthYearFromUnixTime(unixTime)}? <br /> This action cannot be
          undone{' '}
          <div>
            <button onClick={() => modalRef.current?.close()}>Cancel</button>
            <button onClick={() => deletePracticePlan(id)}>Delete</button>
          </div>
        </DeleteModal>
      </li>
    );
  }
)`
  list-style: none;
  padding: 16px;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  & > ${DeleteModal} {
    & > div > div {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }
  }
`;

type PracticePlansContentType = {
  className?: string;
  practicePlans: PracticePlanType[];
  deletePracticePlan: (id: string) => void;
};

const PracticePlansContent = styled(
  ({
    className,
    practicePlans,
    deletePracticePlan,
  }: PracticePlansContentType) => {
    const navigate = useNavigate();

    const handleAddPracticePlan = (navigate: NavigateFunction) => {
      navigate('/create');
    };

    return (
      <main className={className}>
        <Title>
          <h1>Practice plans</h1>
          <Button
            onClick={() => handleAddPracticePlan(navigate)}
            text="Add Practice Plan"
          />
        </Title>
        <ul>
          {practicePlans.map((plan) => (
            <PracticePlanItem
              key={plan.id}
              id={plan.id}
              unixTime={plan.date.seconds}
              deletePracticePlan={deletePracticePlan}
            />
          ))}
        </ul>
      </main>
    );
  }
)`
  background: var(--gray100);
  color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;

  & > * {
    width: 70%;
  }

  & a {
    color: white;
  }

  & > ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: row;
    gap: 4px;
  }
`;

export const PracticePlans = styled(({ className }) => {
  const [practicePlans, setPracticePlans] = useState<PracticePlanType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { addToast, removeToast } = useContext(
    ToastContext
  ) as ToastContextType;

  const deletePracticePlan = async (id: string) => {
    await deleteDoc(doc(db, 'practice_plan', id));
    setPracticePlans((prev) => prev.filter((plan) => plan.id !== id));
    addToast({
      variant: 'success',
      message: 'Practice Plan Successfully Deleted',
      onClose: () => removeToast('Practice Plan Successfully Deleted'),
    });
  };

  const getData = () => {
    setLoading(true);
    return getDocs(collection(db, 'practice_plan'))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .sort(
            (a, b) =>
              Number((b as PracticePlanType).date.seconds) -
              Number((a as PracticePlanType).date.seconds)
          );
        setPracticePlans(newData as PracticePlanType[]);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
      <div className={className}>
        {loading ? (
          <PageLoader>
            <Loader />
          </PageLoader>
        ) : (
          <PracticePlansContent
            practicePlans={practicePlans}
            deletePracticePlan={deletePracticePlan}
          />
        )}
      </div>
    </ErrorBoundary>
  );
})`
  background: var(--gray100);
  height: calc(100% - 51px);
`;
