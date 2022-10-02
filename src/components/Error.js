import React from 'react'

const Error = () => {
   
  const errorImage = new URL('../images/404 error with portals.gif', import.meta.url)

  return (
    <div className='error'>
      <img alt='' src={errorImage}></img>
      <a target='blank' href="https://www.freepik.com/free-vector/404-error-with-portals-concept-illustration_20602754.htm#query=404%20error%20illustration&position=4&from_view=search">Image by storyset</a> on Freepik
    </div>
  )
}

export default Error