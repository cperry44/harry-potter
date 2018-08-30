
import React, { Component } from 'react';



class Hufflepuff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  // get data from given subreddit
  // parse data and save it in state
  // then log data
  fetchFirst(url) {
    var key = "$2a$10$AOw4tITLgAk.0XHRvE2dPOpSI4xJMRF24or9b/JRUE78PlFy2wM06"; // <--- set key
    var that = this;
    if (url) {
      fetch(url + "?" + "key=" + key)
      // promise: when ajax request returns, pass returned string as 'response'
      // convert 'response' string into json object
      .then(function (response) {
        return response.json();
      })
      // promise: after promise
      .then(function (result) {
        console.log(result);
        //console.log(result.data.children);

        //that.setState({ posts: result.data.children, lastPostName: result.data.children[result.data.children.length - 1].data.name });

        //console.log(that.state.posts);
      });
    }
  }

  // when this component loads, call fetchFirst()
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
