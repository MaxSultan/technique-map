import styled from 'styled-components';

export const Button = styled(({ text, onClick, className, Icon, ...rest }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      {...rest}
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
  --button-color: ${({ $level }) =>
    $level === 'caution' ? 'var(--caution)' : 'var(--affirmative)'};

  padding-inline: 32px;
  padding-block: 8px;
  background-color: var(--button-color);
  display: grid;
  gap: clamp(2px, 2vw, 16px);
  grid-auto-flow: column;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  position: relative;

  &:hover,
  &:hover > div {
    background-color: hsl(from var(--button-color) h s calc(l * 0.8));
  }

  &:active,
  &:active > div {
    background-color: hsl(from var(--button-color) h s calc(l * 0.7));
  }

  & > div {
    border-radius: 50%;
    width: 30px;
    aspect-ratio: 1/1;
    border-top: 2px solid white;
    border-left: 2px solid white;
    display: grid;
    place-items: center;
    transform: translate(0%, -35%);
    position: absolute;
    right: 0;
    background-color: var(--button-color);
  }
`;
