import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    const navLinkStyles = ({ isActive }) =>{
        return {
            fontWeight:isActive ? 'bold' :'normal',
            textDecoration:isActive ? 'none' : 'underline',
            }
    }

  return (
    <>
        <nav>
            <NavLink style={navLinkStyles} to='/'>
                <na className='menu'>Home</na>
            </NavLink>
            
            <NavLink style={navLinkStyles}to='/about'>
                <na className='menu'>About</na>
            </NavLink>
        </nav>
    </>
    
  )}