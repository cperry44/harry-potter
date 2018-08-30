import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from "axios";


class HouseList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    Infohpapi()
    Infopotterapi()
    console.log(harryPotterSpells.all)
    return(
      <div>
        <div id="appTitle">
          <h1>Harry Potter Yearbook</h1>
        </div>
        <td class="houseNames">
          Gryffindor
          Ravenclaw
          Hufflepuff
          Slytherin
        </td>
      </div>

    )
  }

}

const harryPotterSpells = require('harry-potter-spells')

function Infohpapi () {
  const  request =
   axios.get(`http://hp-api.herokuapp.com/api/characters`);

    console.log("request", request);

  return{ payload: request}
}

function Infopotterapi () {

  const key= "$2a$10$O4hd7lWpr2K95sV68FMW/uWbh54LNxWort6gLLPiPJ47bNY2F9t82";
  const url = "https://www.potterapi.com/v1/";
  const search = "houses"
  const request2= axios.get(`${url}${search}?key=${key}`);


    //`${url}/characters?key=${key}`);

    console.log("request2:", request2);

  return{ payload: request2}
}


export default HouseList;
