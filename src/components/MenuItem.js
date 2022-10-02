import React from 'react'
import { useParams } from 'react-router-dom'

const MenuItem = ({ menu }) => {

  const params = useParams()
  console.log(params)
  console.log(menu)
 
  return (
    <div key={menu.id}>
      
      {menu.map(steak => (
        steak.id === parseInt(params.steakId) &&

        <div>
          <img alt={steak.title} src={steak.image}></img>
          <h1>{steak.title}</h1>
          <p>{steak.description}</p>
          <p>{steak.price}</p>
        </div>

        
      ))}
    </div>
  )
}

export default MenuItem

