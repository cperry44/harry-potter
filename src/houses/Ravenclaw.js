import React, { Component } from 'react';



class Ravenclaw extends Component {

  constructor(props) {
    super(props);

    this.state = {
      house: {}
    };
  }

  fetchFirst(url) {
    var key = "$2a$10$AOw4tITLgAk.0XHRvE2dPOpSI4xJMRF24or9b/JRUE78PlFy2wM06"; // <--- set key
    var that = this;
    if (url) {
      fetch(url + "?" + "key=" + key)
      .then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log(result[0]);
        that.setState({
          house: result[0]
        });
      });
    }
  }

  componentWillMount() {
      this.fetchFirst("https://www.potterapi.com/v1/houses/5a05da69d45bd0a11bd5e06f");
  }
  render() {
    return <h1>{this.state.house.name}</h1>
  }
}


export default Ravenclaw;
