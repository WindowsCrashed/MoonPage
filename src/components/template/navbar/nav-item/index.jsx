import React from 'react'
import './style.css'

function NavItem({ to, children }) {
    return (
        <li className='nav-item'>
            <a href={ to }>{ children }</a>
        </li>
    )
}

export default NavItem