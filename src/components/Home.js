import React from 'react'
import { AiFillFire } from 'react-icons/ai'



const Home = () => {
  return (
    <div 
    className='home'
    style={{ 
      backgroundImage: `url(https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
      backgroundRepeat: 'no-repeat',
      backgroundCover: 'cover',
      backgroundPosition: 'center',
      width:'100%',
      margin: ' 0 auto',
    }} >
      <div className='home-text'>
      <i><AiFillFire/></i>
      <h1>grill house</h1> 
      <p>Best steaks in town</p>
     </div>
    </div>
  )
}

export default Home