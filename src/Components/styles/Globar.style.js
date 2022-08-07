import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
    width: 100vw;
    
  
}

@media (max-width:400px) {

body {
  margin: 0;
}
}

`;

export default GlobalStyle;