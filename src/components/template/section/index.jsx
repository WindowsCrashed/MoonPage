import React from 'react'
import './style.css'

function Section({ id, children }) {
    return (
        <section id={id}>
            { children }
        </section>
    )
}

export default Section