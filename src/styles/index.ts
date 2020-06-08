import { createGlobalStyle } from 'styled-components';
import { FuhthestBackground, TextColor } from './components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    margin: 0;
  }
`;
export default GlobalStyle;
