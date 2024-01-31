import styled from 'styled-components';

export const Button = styled(({ text, onClick, className, Icon }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <span>{text}</span>
      {!!Icon && (
        <div>
          <Icon />
        </div>
      )}
    </button>
  );
})`
  padding-inline-start: 32px;
  background-color: var(--caution);
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  align-items: center;
  padding-inline-end: 0px;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;

  &:hover,
  &:hover > div {
    background-color: hsl(from var(--caution) h s l / 90%);
  }

  &:active,
  &:active > div {
    background-color: hsl(from var(--caution) h s l / 50%);
  }

  & > div {
    border-radius: 50%;
    width: 30px;
    aspect-ratio: 1/1;
    border-top: 2px solid white;
    border-left: 2px solid white;
    display: grid;
    place-items: center;
    transform: translate(5%, -53%);
    background-color: var(--caution);
  }
`;
