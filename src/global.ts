import { createGlobalStyle } from 'styled-components';
import averta from './fonts/averta-normal.woff2';
import avertaBold from './fonts/averta-bold.woff2';

const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'Averta';
        src: local('Averta'), local('Averta Bold'),
        url(${averta}) format('woff2'),
        url(${avertaBold}) format('woff');
    }
`;

export default GlobalStyle;
