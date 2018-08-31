import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Router, Route, Link } from 'react-router-dom'




class Member extends Component {

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
    var id = this.props.match.params.id;
    if (url) {
      fetch(url + id + "?" + "key=" + key)
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
  

    this.fetchFirst("https://www.potterapi.com/v1/characters/")


  }
  render(){

    if(this.state.result == null || this.state.result == undefined || Object.keys(this.state.result).length == 0) {
      this.getMyData()
      return (
        <div>...loading</div>)
    }

    let member = this.state.result

    return (



      <div class = "text-color-white">
      <Link to = {`/${member.house}`}><button>Back</button></Link>
      <li>Name: {member.name}</li>
      <li>Alias: {member.alias}</li>
      <li>Member of Order of the Phoenix? {member.orderOfThePhoenix ? 'yes':'no'}</li>
      <li>Member of Dumbledore's Army? {member.dumbledoresArmy ? 'yes':'no'}</li>
      <li>Death Eater? {member.deathEater ? 'yes':'no'}</li>
      <li>Ministry of Magic Employee? {member.ministryOfMagic ? 'yes':'no'}</li>


      </div>
    );
  }
}
export default Member;
