import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'add' | 'reduce';
}

const Button = styled.button<ButtonProps>`
  border: none;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  width: 90px;
  height: 35px;
  background-color: ${({ variant }: ButtonProps) => getBgColor(variant)};

  &:hover {
    background-color: ${({ variant }: ButtonProps) => getBgHoverColor(variant)};
  }
`;

const getBgColor = (variant?: string) => {
  switch (variant) {
    case 'add':
      return `#4f4fe4`;
    case 'reduce':
      return `#e44f4f`;
    default:
      return 'grey';
  }
};

const getBgHoverColor = (variant?: string) => {
  switch (variant) {
    case 'add':
      return `#6a6afa`;
    case 'reduce':
      return `#fa7272`;
    default:
      return 'darkgrey';
  }
};

export default Button;
