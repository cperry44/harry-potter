import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as

   Router,
   Route,
    Link
  } from "react-router-dom";


const harryPotterSpells = require('harry-potter-spells')

class Spell extends Component {


  render(){

    console.log(harryPotterSpells.all)
    return(
      <div>
      <h1>Spells</h1>
      <ul>
        {harryPotterSpells.all.map(({name, type, effect}) => (
          <li key={name}>

            <Link to= {`/Spells/${name}`}>{name}</Link>


          </li>
        ))}
      </ul>
      <hr />
      </div>
    )

  }
}








export default Spell;
