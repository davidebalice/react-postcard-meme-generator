import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import Theme from "./config/theme";
import GlobalStyle from "./config/globalStyles";

import App from "./app";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
