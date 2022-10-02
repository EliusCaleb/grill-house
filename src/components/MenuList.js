import React from 'react'
import { Link} from 'react-router-dom'


import menu from '../menu.js'

const MenuList = () => {
  return (
    
    <div>
         {menu.steaks.map(steak => (
          <ul key={steak.id}>
            <Link to={`/menuitem/${steak.id}`}>
          <li >
            <img alt={steak.title} src={steak.image}></img>
            <h1>{steak.title}</h1>  
          </li>
          </Link>
        
      </ul>
      ))}
        
     </div>
  )
}

export default MenuList