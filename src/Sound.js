import React from 'react';
import Sound from 'react-sound';
import ReactDOM from 'react-dom'

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.url = "./Harry Potter Theme Song.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }

  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }

  render() {

  return (
    <audio controls autoPlay>
      <source src="file:///Users/tanyacox/code/harry-potter/src/Harry%20Potter%20Theme%20Song.mp3" type="audio/mpeg" />
    </audio>
    );
  }
}
//
// ReactDOM.render(
//   < />,
//   document.getElementById('container')
// );

export default Music
