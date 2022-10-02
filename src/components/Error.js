import React from 'react'

const Error = () => {
   
  const errorImage = new URL('../images/404 error with portals.gif', import.meta.url)

  return (
    <div className='error'>
      <img alt='' src={errorImage}></img>
    </div>
  )
}

export default Error