import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'
import axios from "axios";
import Gryffindor from "../houses/Gryffindor.js"
import Ravenclaw from "../houses/Ravenclaw.js"
import Hufflepuff from "../houses/Hufflepuff.js"
import Slytherin from "../houses/Slytherin.js"
import '../index.css';
import Sound from "react-sound"
import MyComponentWithSound from "../Sound.js"

const App = () => (
  <div>
    <Main />
  </div>
)
//==============================================================================
const Main = () => (
  <main id="body" >
    <Switch>
      <Route exact path='/' component={Houses}/>
      <Route path='/1' component={Gryffindor}/>
      <Route path='/2' component={Ravenclaw}/>
      <Route path='/3' component={Hufflepuff}/>
      <Route path='/4' component={Slytherin}/>
    </Switch>
  </main>
)

//==============================================================================

const Houses = () => (
  <div class = "text-color-white" >
      <h1 id="title">Harry Potter Yearbook</h1>
      <ul class="text-color-white" >
        {
          HarryPotterAPI.all().map(h => (
            <li key={h.name} id={h.name}>
              <Link to={`/${h.number}`}><img src={h.image} /></Link>
              <h3>{h.name}</h3>
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
  console.log(house)
  let sorting = "hat"

  switch (house.name) {
    case "Ravenclaw": let sorting = "hello"; break;
  }

  if (!house) {
    return <div>Back off, Muggle! There are only four Hogwarts Houses</div>
  }
  return (
  <div class = "text-color-white">
    <Link to = "/"><button>Back</button></Link>
    <h1>{house.name}</h1>
    <p><img src= {house.image} /></p>

  </div>
  )
}

//==============================================================================
// hardcode for practice
const HarryPotterAPI = {
  houses: [
    { number: 1, name: "Gryffindor",image:
    "https://img00.deviantart.net/6636/i/2013/340/9/5/gryffindor_crest_by_needs_more_coffee-d6x0p36.jpg"},
    { number: 2, name: "Ravenclaw", image: "http://fc02.deviantart.net/fs70/i/2013/340/b/e/ravenclaw_crest_by_needs_more_coffee-d6x0qru.jpg"},
    { number: 3, name: "Hufflepuff", image: "https://img00.deviantart.net/7642/i/2013/340/9/8/hufflepuff_crest_by_needs_more_coffee-d6x0m45.jpg" },
    { number: 4, name: "Slytherin", image: "https://img00.deviantart.net/e815/i/2013/340/f/a/slytherin_crest_by_needs_more_coffee-d6x0q5d.jpg"}
  ],
  all: function() { return this.houses},
  get: function(id) {
    const isHouse = h => h.number === id
    return this.houses.find(isHouse)
  }
}









export default App;
