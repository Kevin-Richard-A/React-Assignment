import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
 const navigate = useNavigate()
  return (
    <div> 
        <h1>Hey, this is home page</h1>
        <button onClick= {() => navigate('/LoginPage')} className='btn'> Login  </button>
        <button onClick={()=> navigate('/register')} className='btn'>Register</button>
        <button onClick={()=> navigate('/ProfileCreation')} className='btn'>Create Profile</button>
    </div>
  )
}