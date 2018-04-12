import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactAudioPlayer from 'react-audioplayer'

class AudioModal extends Component {

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
  }

  render() {
    return (
      <ReactAudioPlayer
        playlist={[{name: this.props.songName, src: "/audio/view?jwt=" + localStorage.jwt + "&filename=" + this.props.filename}]}
        style={{width: '100%'}}
        ref={audioComponent => { this.audioComponent = audioComponent }}
      />
    )
  }
}

export default AudioModal
