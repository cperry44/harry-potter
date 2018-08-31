import React, { Compondent } from "react";
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'
import ReactDOM from "react-dom";

import App from "./component/App.js";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
