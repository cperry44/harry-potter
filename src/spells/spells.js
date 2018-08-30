import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as

   Router,
   Route,
    Link
  } from "react-router-dom";




class Spells extends Component {


  render(){

    console.log(harryPotterSpells.all)
    return(
      <div>
      <h1>Spells</h1>
      <ul>
        {harryPotterSpells.all.map(({name, type, effect}) => (
          <li key={name}>
          <Router>
            <Link to= {`${name}`}>{name}</Link>
          </Router>

          </li>
        ))}
      </ul>
      <hr />
      </div>
    )

  }
}





const harryPotterSpells = require('harry-potter-spells')


export default Spells;
