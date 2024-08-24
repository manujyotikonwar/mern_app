import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className="nav">
            <Link  className="nav-link active" aria-current="page" >Mern</Link>
            <Link to="/" className="nav-link" >Creat post</Link>
            <Link to="/all"  className="nav-link" >all post</Link>
            
        </nav>
    )
}

export default Navbar