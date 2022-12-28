import React, { useState } from 'react'
import NavBar from '../navbar'
import './style.css'

function Header() {    
    const [textColor, setTextColor] = useState('white-text')
    
    const swapColor = () => 
        window.scrollY < (window.innerHeight - 50)
            ? setTextColor('white-text') : setTextColor('black-text')

    window.addEventListener('scroll', swapColor)

    return (
        <header className={`header ${textColor}`}>
            <NavBar/>
        </header>
    )
}

export default Header