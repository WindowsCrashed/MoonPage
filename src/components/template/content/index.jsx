import React from 'react'
import Section from '../section'
import VideoDisplay from '../video-display'
import './style.css'
import Moon from '../../../assets/video/moon-vecteezy.mp4'

function Content() {
    return (
        <main className='content'>
            <Section id="title">
                <VideoDisplay src={ Moon }/>
            </Section>
        </main>
    )
}

export default Content