import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'

function Volume(props) {
    return (
        <div
            onClick={props.handleVolumeToggle}
            className='Volume'
        >
            <VolumeIcon
                color="white"
                size={25}
            />
            <div className="Volume-range">
                <input type="range"
                    min={"0"}
                    max={"1"}
                    step={".05"}
                    value={props.volume}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </div>
    )

}

export default Volume;