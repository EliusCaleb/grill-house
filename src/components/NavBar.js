import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink exact='true' to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/menulist'>Menu</NavLink></li>
                <li><NavLink to='reservation'>Reservation</NavLink></li>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar