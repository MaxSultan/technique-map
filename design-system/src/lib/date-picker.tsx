import { MouseEvent, RefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CalendarIcon } from './icons/calendar-icon';

interface DetailedHTMLProps {
  popover: boolean;
}

const DateInput = styled.input`
  border: 1px solid black;
  padding: 8px;
  display: inline-block;
  width: 180px;
`;

const getYearsInRange = (centerYear: number, range: number) => {
  const years = [];

  for (let i = centerYear - range; i <= centerYear + range; i++) {
    years.push(i);
  }

  return years;
};

const numDays = (year: number, month: number) =>
  new Date(year, month, 0).getDate();
const firstDayOfMonth = (year: number, month: number) =>
  new Date(year, month, 1);

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement | undefined>,
  callback: (event: Event) => void
) => {
  const clickOutside =
    (
      ref: RefObject<HTMLDivElement | undefined>,
      callback: (event: Event) => any
    ) =>
    (event: Event) => {
      //@ts-ignore:next-line
      if (ref.current?.contains(event.target)) return;
      typeof callback === 'function' ? callback(event) : null;
    };

  const clickEventCallback = clickOutside(ref, callback);

  useEffect(() => {
    document.addEventListener('click', (event: Event) =>
      clickEventCallback(event)
    );
    return () =>
      document.removeEventListener('click', (event: Event) =>
        clickEventCallback(event)
      );
  }, []);
};

// #region calendar

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAY_ABBREVIATIONS = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'monday tuesday wednesday thursday friday saturday sunday';
  gap: 2px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > [aria-label='left'] {
    margin-left: auto;
  }
`;

const DayHeader = styled.div`
  text-align: center;
`;

const DayButton = styled.button<{ $selected: boolean }>`
  aspect-ratio: 1/1;
  background-color: transparent;
  border: transparent;
  ${({ $selected }) =>
    $selected &&
    'background-color: var(--primary); color: white; border-radius:50%'}
`;

const useCalendarDaysByMonth = (
  selectedMonth: number,
  selectedYear: number
) => {
  const [calendarDays, setCalendarDays] = useState<(null | number)[]>([]);

  const daysInCurrentMonth = numDays(selectedYear, selectedMonth + 1) || 0;
  let offset = firstDayOfMonth(selectedYear, selectedMonth).getDay() - 1 || 0;
  if (offset === -1) offset = 6;

  useEffect(() => {
    const newDays = [
      ...new Array(offset).fill(null),
      ...[...Array(daysInCurrentMonth)].map((_, index) => index + 1),
    ];
    setCalendarDays(newDays);
  }, [selectedMonth, selectedYear]);

  return calendarDays;
};

const Calendar = styled(
  ({ className, passedRef, setSelectedDate, toggleCalendar, value }) => {
    const currentYear = new Date(value).getFullYear();
    const currentMonth = new Date(value).getMonth();
    const [selectedMonthYear, setSelectedMonthYear] = useState<string>(
      `${currentMonth}/${currentYear}`
    );

    const [selectedMonth, selectedYear] = selectedMonthYear
      .split('/')
      .map((item: string) => Number(item));
    const calendarDays = useCalendarDaysByMonth(selectedMonth, selectedYear);
    const yearsInScope = getYearsInRange(currentYear, 5);

    const handleDayButtonClick = (day: number) => {
      toggleCalendar();
      setSelectedDate(
        `${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(
          2,
          '0'
        )}-${selectedYear}`
      );
    };

    const handleLeftButtonClick = () => {
      setSelectedMonthYear((prev) => {
        const [month, year] = prev.split('/');
        if (Number(month) === 0) return `${11}/${Number(year) - 1}`;
        return `${Number(month) - 1}/${year}`;
      });
    };

    const handleRightButtonClick = () =>
      setSelectedMonthYear((prev) => {
        const [month, year] = prev.split('/');
        if (Number(month) === 11) return `${0}/${Number(year) + 1}`;
        return `${Number(month) + 1}/${year}`;
      });

    return (
      <div
        ref={passedRef}
        className={className}
        // @ts-ignore:next-line
        popover="true"
      >
        <CalendarHeader>
          <select
            value={selectedMonthYear}
            onChange={(e) => setSelectedMonthYear(e.target.value)}
          >
            {yearsInScope.map((year) =>
              MONTHS.map((month, index) => (
                <option
                  key={`${index}/${year}`}
                  value={`${index}/${year}`}
                >{`${month} , ${year}`}</option>
              ))
            )}
          </select>
          <button
            aria-label="left"
            onClick={handleLeftButtonClick}
          >
            {'\u2190'}
          </button>
          <button
            aria-label="right"
            onClick={handleRightButtonClick}
          >
            {'\u2192'}
          </button>
        </CalendarHeader>
        <CalendarGrid>
          {DAY_ABBREVIATIONS.map((day) => (
            <DayHeader key={`${day}-header`}>{day}</DayHeader>
          ))}
          {calendarDays.map((day, index) =>
            typeof day === 'number' ? (
              <DayButton
                key={`${day}-${selectedMonth}-${selectedYear}`}
                onClick={() => handleDayButtonClick(day)}
                $selected={
                  new Date(value).getDate() === day &&
                  selectedMonth === currentMonth &&
                  selectedYear === currentYear
                }
              >
                {day}
              </DayButton>
            ) : (
              <span key={`blank-day-${index}`}></span>
            )
          )}
        </CalendarGrid>
      </div>
    );
  }
)`
  position: fixed;
  inset: 0;
  width: 80%;
  height: fit-content;
  box-shadow: 2px 0px 4px rgba(31, 28, 28, 0.2);
  z-index: 1;

  @media screen and (width > 800px) {
    width: 300px;
    position: absolute;
    left: 0;
    top: 36.5px;
  }
  background-color: white;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

// #endregion calendar

export const DatePicker = styled(({ className, value, setValue }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const calendarDisplayRef = useRef<HTMLDivElement | undefined>(null);

  const toggleCalendar = () => {
    calendarDisplayRef.current?.togglePopover();
  };

  useOnClickOutside(calendarDisplayRef, (event: Event) => {
    //@ts-ignore:next-line
    if (buttonRef.current?.contains(event.target)) return;
    calendarDisplayRef.current?.hidePopover();
  });

  return (
    <div className={className}>
      <DateInput
        value={value}
        readOnly
      />
      <button
        onClick={toggleCalendar}
        ref={buttonRef}
      >
        <CalendarIcon />
      </button>
      <Calendar
        passedRef={calendarDisplayRef}
        toggleCalendar={toggleCalendar}
        setSelectedDate={setValue}
        value={value}
      />
    </div>
  );
})`
  width: min-content;
  display: flex;
  justify-content: center;
  position: relative;
`;
