import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import { formatedTime } from '../../utilities/utilities'
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner'

export default class VideoPlayer extends Component {
    state = {
        playing: false,
        loading: false,
        duration: '',
        time: '',
        durationFloat: 0,
        timeFloat: 0,
        progress: 0,
    }
    togglePlay = (event) => {
        this.setState({
            playing: !this.state.playing,
        })
        // console.log(this.state.pause)
    }
    componentDidMount() { // Para poder ligar el estado del botón de pausa con que se reproduzca o no el video.
        this.setState({
            playing: (!this.props.autoplay)
        })
        console.log(this.props.autoplay)
    }
    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: formatedTime(this.video.duration), //Hay que ponerlo en un estado para poder usarlo en otras cosas de la UI
            durationFloat: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        this.video = event.target
        this.setState({
            time: formatedTime(this.video.currentTime),
            timeFloat: this.video.currentTime
        })
        // console.log(this.video.currentTime) // Current time ya viene en HTML5
    }
    handleProgressChange = event => {
        // event.target.value
        this.video.currentTime = event.target.value // Con esto se mueve el video según la posición que yo ponga en el progress bar
    }
    // Aquí es donde se debe formatear eso
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    render(){
        return (
            <div className="Video">
                <VideoPlayerLayout>
                    <Title title="Este es un video bueno"/>
                    <Controls>
                        <PlayPause 
                        playing={this.state.playing}
                        handleClick={this.togglePlay}
                        />
                        <Timer 
                        duration={formatedTime(this.state.durationFloat)}
                        progress={formatedTime(this.state.timeFloat)} />
                        <ProgressBar
                            value={this.state.timeFloat}
                            max={this.state.durationFloat}
                            handleProgressChange={this.handleProgressChange}
                        />
                    </Controls>
                    <Spinner
                        active={this.state.loading}/>                    
                        <Video
                        handleLoadedMetadata = {this.handleLoadedMetadata}
                        handleTimeUpdate={this.handleTimeUpdate}
                        autoplay={this.props.autoplay}
                        playing={this.state.playing} // Ojo -> Se le manda el estado, no las propiedades
                        src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                        handleSeeking={this.handleSeeking}
                        handleSeeked={this.handleSeeked}/>
                </VideoPlayerLayout>
            </div>
        )
    }
}