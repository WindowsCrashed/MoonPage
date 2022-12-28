import React from 'react'
import './style.css'

function VideoDisplay({ src }) {
    return (
        <div className='video-container'>
            <video autoPlay loop muted onContextMenu={e => e.preventDefault()}>
                <source src={ src }/>
            </video>
        </div>
    )
}

export default VideoDisplay