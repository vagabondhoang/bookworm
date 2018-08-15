import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => 
    <React.Fragment>
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
    </React.Fragment>

export default HomePage