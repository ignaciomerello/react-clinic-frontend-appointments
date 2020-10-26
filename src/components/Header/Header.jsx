import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/users">Users List</Link>
            <Link to="/appointments">Appointments List</Link>
        </div>
    )
}

export default Header;