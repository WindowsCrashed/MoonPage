import React from 'react'
import useSmoothNav from '../hooks/useSmoothNav'

function NavLink({ to, children }) {
    const { handleSmoothNav } = useSmoothNav(to)
    
    return (
        <a href={ `#${to}` } onClick={ handleSmoothNav }>{ children }</a>
    )
}

export default NavLink