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
    var key = "$2a$10$x/NuAd.Z/g65zfgmwaXXPeRj9GipD84aLQRONx.ZbB5OYi9ptYW8C"; // <--- set key
    var that = this;
    if (url) {
      fetch(url + "?" + "key=" + key)
      .then(function (response) {
        //debugger;
        response.json().then(function (data) {
          //debugger;
          self.setState({
            result: data
          })
          console.log(self);
        })
      });
    }
  }

  getMyData() {
    //
    // this.setState({
    //   result: this.fetchFirst("https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f")
    // });

    this.fetchFirst("https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f")
    console.log(this.state);
    // debugger;
  }
  render(){

    if(this.state.result == null || this.state.result == undefined || Object.keys(this.state.result).length == 0) {
      this.getMyData()
      return (
        <div>loading...</div>)
    }

    let house = this.state.result[0]
    return (
      <div class = "text-color-white">
      <Link to = "/"><button>Back</button></Link>
      <li>House Ghost: {house.houseGhost}</li>
      <li>Head of House: {house.headOfHouse}</li>
      <li>Values: {house.values[0]}, {house.values[1]}, {house.values[2]}, & {house.values[3]}</li>
      <li>Founder: {house.founder}</li>
      <li>Mascot: {house.mascot}</li>
      <li>House colors: {house.colors[0]} & {house.colors[1]}</li>
      <li>House members: <Link to={'/member/' + house.members[2]._id}>{house.members[2].name}</Link>, {house.members[7].name}, {house.members[9].name}, {house.members[11].name}, {house.members[17].name}, & {house.members[21].name}</li>

      </div>  //{this.state.result[0]}</div>

    );
  }
}

export default Gryffindor;
