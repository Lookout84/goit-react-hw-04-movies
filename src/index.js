import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// импорты
// браузерройтер роутер для роутинга
// провайдер для стора
// стор

// import { PersistGate } from 'redux-persist/integration/react'
// персистстор
// {
//   /* <PersistGate loading={null} persistor={persistor}></PersistGate> */
// }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
