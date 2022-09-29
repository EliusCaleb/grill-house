import React, { useState, useEffect } from 'react'

const Reservation = () => {

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
       
       fetch('http://localhost:3000/clients',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({newReservation})
       })
       .then(r => r.json())
       .then(data => console.log(data) )
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input onChange={e => setFirstName(e.target.value)} type="text" value={firstName} placeholder='First Name'/>
            <input onChange={e => setSecondName(e.target.value)} type="text" value={secondName} placeholder='Second Name'/>
            <input onChange={e => setEmail(e.target.value)} type="text" value={email} placeholder='Email'/>
            <input onChange={e => setPhoneNumber(e.target.value)} type="text" value={phoneNumber}placeholder='Phone number'/>
            <button type='submit'>Book Reservation</button>

            
        </form>
    </div>
  )
}

export default Reservation