import React, { Component } from 'react';

export default class Video extends Component { //se le pone a extender de Component para tener estados.
    render() {
        return (
            <video
            autoPlay={this.props.autoplay}
            src={this.props.src}/>
        )
    }
}
