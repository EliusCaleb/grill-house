import React, { useState }from 'react'
import { Link} from 'react-router-dom'


import menu from '../menu.js'

const MenuList = () => {

  const [search, setSearch] = useState('')

  const filteredSteak = 
  menu.steaks.filter(steak => steak.title.toLowerCase().includes(search.toLowerCase()))

  return (
    
    <div >
      <div className='menulist-input'>
      <input 
      type={'text'} 
      placeholder={'Search'} 
      value={search}
      onChange={(e) => setSearch(e.target.value)} />
      </div>
      

        <div className='menulist'>

         {filteredSteak.map(steak => (
          <ul key={steak.id}>
            <Link to={`/menuitem/${steak.id}`}>
          <li >
            <img alt={steak.title} src={steak.image}></img>
            <h3>{steak.title}</h3>  
          </li>
          </Link>
        
      </ul>
      ))}
        </div>

        
     </div>
  )
}

export default MenuList