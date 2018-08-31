import React from 'react';
import Sound from 'react-sound';

class MyComponentWithSound extends React.Component {
  render() {
    return (
      <Sound
        url="https://gaana.com/song/harry-potter-main-theme-5"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    )};
  }

export default MyComponentWithSound;
