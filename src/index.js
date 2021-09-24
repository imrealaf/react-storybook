import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Theme } from "theme";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);

//reportWebVitals();
