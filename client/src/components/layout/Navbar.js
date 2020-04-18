import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <nav className="navbar nav">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link className="navbar-brand navbar-logo-link" to="/" >StatsApp</Link>
                </div>
            </div>
        </div>
    </nav>

    )
}

export default Navbar
