import React, { Component } from 'react';
import './video.css'

export default class Video extends Component { //se le pone a extender de Component para tener estados.
    togglePlay(){
        this.props.playing ? this.video.play() : this.video.pause()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.playing !== this.props.playing) {
            this.togglePlay();
        }
    }
    setRef = element => {
        this.video = element
    }
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked,
        } = this.props
        return (
            <video
            autoPlay={this.props.autoplay}
            src={this.props.src}
            ref={this.setRef}
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onSeeking={handleSeeking}
            onSeeked={handleSeeked}/>
        )
    }
}
