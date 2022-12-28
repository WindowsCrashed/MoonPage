import React from 'react'
import NavItem from './nav-item'
import NavLink from './nav-link'
import './style.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <div>
                <span className='brand'>
                    <NavLink to="title">The Moon Page</NavLink>
                </span>
            </div>
            <div className='nav-items'>
                <ul>
                    <NavItem to="Home">Home</NavItem>
                    <NavItem to="Something">Something</NavItem>
                    <NavItem to="Something else">Something else</NavItem>
                    <NavItem to="contacts">Contacts</NavItem>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar