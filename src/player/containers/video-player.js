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
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

export default class VideoPlayer extends Component {
    state = {
        playing: false,
        muted: false,
        volume: 1,
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
    handleVolumeChange = event => {
        this.video.volume = event.target.value //Ese .volume es nativo de HTML5
        this.setState({
            volume: this.video.volume
        })
    }
    handleVolumeToggle = event => {
        if(this.state.muted) {
            this.setState({
                muted: false,                
            })
        }  else { this.setState({
                muted: true
            })
        }       
    }
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            console.log("true")
          // mando a full screen
          this.player.webkitRequestFullscreen()
        } else {
          document.webkitExitFullscreen();
          // salgo del full screen
        }
    }
    setRef = element => { // Esto es para poder tener ese elemento en otros lugares, ejemplo, en el handleFullScreen.
        this.player = element
    }
    render(){
        return (
            <div className="Video">
                <VideoPlayerLayout
                    setRef={
                        this.setRef//Así se pone la referencia, pero hay que ponerla en el js del elemento
                    }>
                    <Title title={this.props.title}/>
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
                        <Volume
                            handleVolumeChange={this.handleVolumeChange}
                            handleVolumeToggle={this.handleVolumeToggle}
                            volume={this.state.volume}/>
                        <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}/>
                    </Controls>
                    <Spinner
                        active={this.state.loading}/>                    
                    <Video
                        handleLoadedMetadata = {this.handleLoadedMetadata}
                        handleTimeUpdate={this.handleTimeUpdate}
                        autoplay={this.props.autoplay}
                        playing={this.state.playing} // Ojo -> Se le manda el estado, no las propiedades
                        src={this.props.src}
                        handleSeeking={this.handleSeeking}
                        handleSeeked={this.handleSeeked}/>
                </VideoPlayerLayout>
            </div>
        )
    }
}