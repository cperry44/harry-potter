import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'

class Gryffindor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: {}
    };

  }

  fetchFirst(url) {
    let self = this;
    var key = "$2a$10$x/NuAd.Z/g65zfgmwaXXPeRj9GipD84aLQRONx.ZbB5OYi9ptYW8C";

    var that = this;
    if (url) {
      fetch(url + "?" + "key=" + key)
      .then(function (response) {

        response.json().then(function (data) {

          self.setState({
            result: data
          })

        })
      });
    }
  }

  getMyData() {

    this.fetchFirst("https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f")

  }
  render(){

    if(this.state.result == null || this.state.result == undefined || Object.keys(this.state.result).length == 0) {
      this.getMyData()
      return (
        <div>loading...</div>)
    }

    let house = this.state.result[0];

    return (
      <div className = "text-color-white">
        <Link to = "/"><button>Back</button></Link>
        <li className="text-color-gold">House Ghost: {house.houseGhost}</li>
        <li className="text-color-gold">Head of House: {house.headOfHouse}</li>
        <li className="text-color-gold">Values: {house.values[0]}, {house.values[1]}, {house.values[2]}, & {house.values[3]}</li>
        <li className="text-color-gold">Founder: {house.founder}</li>
        <li className="text-color-gold">Mascot: {house.mascot}</li>
        <li className="text-color-gold">House colors: {house.colors[0]} & {house.colors[1]}</li>
        <li>House members:
          <ul>
          {house.members.map((member) => (

            <li key={member._id}>
              <Link to= {`/member/${member._id}`}>{member.name}</Link>
            </li>
            ))}
          </ul>
        </li>
      </div>

    );
  }
}

export default Gryffindor;
