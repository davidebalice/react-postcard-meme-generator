import { createGlobalStyle } from 'styled-components';
import 'typeface-open-sans';
import bg from "../assets/images/bg.jpg";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.mainFont};
        font-size: ${({ theme }) => theme.typography.baseFont};
        text-decoration:none;
    }

    body {
        color: ${({ theme }) => theme.typography.colorFont};
        background-image: url('${bg}');
        background-size:cover;
    }

    a {
        text-decoration:none;
    }

    img{
        max-width: 100%;
    }

    .textCol{
        width:33% !important
    }

    .bold{
        font-weight:bold
    }
`;

export default GlobalStyle;
