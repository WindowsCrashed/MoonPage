import React from 'react'
import NavItem from './nav-item'
import './style.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <div>
                <span className='brand'>The Moon Page</span>
            </div>
            <div className='nav-items'>
                <ul>
                    <NavItem to="#Home">Home</NavItem>
                    <NavItem to="#Something">Something</NavItem>
                    <NavItem to="#Something else">Something else</NavItem>
                    <NavItem to="#Contacts">Contacts</NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar