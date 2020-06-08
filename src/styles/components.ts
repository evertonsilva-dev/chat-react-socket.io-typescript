import styled from 'styled-components';
import theme from 'styled-theming';

export const TextColor = theme('mode', {
  light: '#333',
  dark: '#DEE4E7',
});
export const FuhthestBackground = theme('mode', {
  light: '#DEE4E7',
  dark: '#111418',
});
export const MiddleBackground = theme('mode', {
  light: '#eff0f2',
  dark: '#191f24',
});
export const MiddleSecondBackground = theme('mode', {
  light: '#f9f9fa',
  dark: '#232a31',
});
export const ClosestBackground = theme('mode', {
  light: '#fff',
  dark: '#38434f',
});
export const Shadow = theme('mode', {
  light: '#0002',
  dark: '#fff2',
});
export const Primary = theme('mode', {
  light: '#4a7691',
  dark: '#6BAAD0',
});
export const Secondary = theme('mode', {
  light: '#af8303',
  dark: '#FBBC05',
});
export const Tertiary = theme('mode', {
  light: '#b14d3a',
  dark: '#FE6E53',
});

export const Button = styled.button`
  background-color: ${Primary};
  color: ${TextColor};
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 2px 30px ${Shadow};
    outline: none;
  }
  &.larger {
    width: 100%;
  }
`;
export const ButtonOutline = styled(Button)`
  background-color: transparent;
  border: 1px solid ${TextColor};
`;
