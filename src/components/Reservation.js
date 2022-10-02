import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' // replacement for the useHistory hook

// reservation formdata

const Reservation = () => {

  const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function handleSubmit () {
       const newReservation ={
        firstName: firstName,
        secondName: secondName,
        email: email,
        phoneNumber: phoneNumber
       } 
       
       fetch('http://localhost:8001/clients',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({newReservation})
       })
       .then(r => r.json())
       .then(data => console.log(data) )
    }

    function handleClick () {

      handleSubmit()
      
      alert (`Thank you for your reservation ${firstName} ${secondName}!`)

      navigate('/')  
    
    }

  return (
    <div className='reservationform'>
        <form onSubmit={handleSubmit} action="">
            <input 
            required
            onChange={e => setFirstName(e.target.value)} 
            type="text" value={firstName} 
            placeholder='First Name'/>
            <input 
            required
            onChange={e => setSecondName(e.target.value)} 
            type="text" value={secondName} 
            placeholder='Second Name'/>
            <input
            required 
            onChange={e => setEmail(e.target.value)} 
            type="text" value={email} 
            placeholder='Email'/>
            <input
            required
             onChange={e => setPhoneNumber(e.target.value)} 
             type="text" value={phoneNumber}
             placeholder='Phone number'/>
            <button 
            type='submit' 
            onClick={handleClick}>Book Reservation</button>

            
        </form>
    </div>
  )
}

export default Reservation