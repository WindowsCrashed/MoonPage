import React from 'react'
import NavBar from '../navbar'
import useBackground from './hooks/useBackground'
import './style.css'

function Header() {    
    return (
        <header className={`header ${useBackground()}`}>
            <NavBar/>
        </header>
    )
}

export default Header