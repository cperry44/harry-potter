import React, { Component } from "react";
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'
import ReactDOM from "react-dom";
import Ravenclaw from "./houses/Ravenclaw.js"
import App from "./component/App.js";


ReactDOM.render(
  <BrowserRouter>
    <Ravenclaw />
  </BrowserRouter>
, document.getElementById('root'));
