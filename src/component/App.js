import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'
import axios from "axios";

const App = () => (
  <div>
    <Main />
  </div>
)
//==============================================================================
const Main = () => (
  <main>

    <Switch>
      <Route exact path='/' component={Houses}/>
      <Route path='/:number' component={HouseView}/>
    </Switch>
  </main>
)

//==============================================================================

const Houses = () => (
  <div>
      <h1 id="title">Harry Potter Yearbook</h1>
      <ul>
        {
          HarryPotterAPI.all().map(h => (
            <li key={h.name}>
              <Link to={`/${h.number}`}>{h.name}</Link>
            </li>
          ))
        }
      </ul>
 </div>
)
//==============================================================================

const HouseView = (props) => {
  let house = HarryPotterAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!house) {
    return <div>Back off, Muggle! There are only four Hogwarts Houses</div>
  }
  return (
  <div>

  </div>
  )
}

//==============================================================================
// hardcode for practice
const HarryPotterAPI = {
  houses: [
    { number: 1, name: "Gryffindor"},
    { number: 2, name: "Ravenclaw"},
    { number: 3, name: "Hufflepuff"},
    { number: 4, name: "Slytherin"}
  ],
  all: function() { return this.houses},
  get: function(id) {
    const isHouse = h => h.number === id
    return this.houses.find(isHouse)
  }
}










export default App;
