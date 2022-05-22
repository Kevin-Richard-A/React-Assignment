import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
 const navigate = useNavigate()
  return (
    <div> 
        <h4>Hey, this is home page</h4>
        <button onClick= {() => navigate('/LoginPage')}> Login  </button>
        <br />
        <br />
        <button onClick={()=> navigate('/register')}>Register</button>
    </div>
  )
}