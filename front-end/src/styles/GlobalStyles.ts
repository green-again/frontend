import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${normalize}
    body{
        overflow-x: hidden;
        width: 100%;
    }
    *{
        border: none;
        outline: none;
        list-style: none;
    }
    button{
        cursor: pointer;
    }
`;
