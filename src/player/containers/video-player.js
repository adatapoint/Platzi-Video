import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video'

export default class VideoPlayer extends Component {
    render(){
        return (
            <VideoPlayerLayout>
                <Video
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"></Video>
            </VideoPlayerLayout>
        )
    }
}