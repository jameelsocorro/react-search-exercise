import { injectGlobal } from 'styled-components';

injectGlobal`
    html {
        height: 100%;
        width: 100%;
    }
    body {
        background-color: #eee;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        height: 100%;
        width: 100%;
    }
    a {
        text-decoration: none;
    }
    ul {
        margin: 0px;
        padding-left: 16px;
    }
    #app {
        height: 100%;
        width: 100%;
    }
`;
