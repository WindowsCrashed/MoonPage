import React from 'react'
import NavLink from '../nav-link'
import './style.css'

function NavItem({ to, children }) {
    return (
        <li className='nav-item'>
            <NavLink to={to}>
                {children}
            </NavLink>
        </li>
    )
}

export default NavItem