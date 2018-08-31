
import React, { Component } from 'react';



class Hufflepuff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  fetchFirst(url) {
    var key = "$2a$10$AOw4tITLgAk.0XHRvE2dPOpSI4xJMRF24or9b/JRUE78PlFy2wM06"; // <--- set key
    var that = this;
    if (url) {
      fetch(url + "?" + "key=" + key)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result);
      });
    }
  }
  componentWillMount() {

      this.fetchFirst("https://www.potterapi.com/v1/houses/5a05dc58d45bd0a11bd5e070");

  }
  render() {

    return (

      <div className="App">


      </div>
    );
  }
}

export default Hufflepuff;
