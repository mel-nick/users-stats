import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <div className="navbar nav">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link className="navbar-brand navbar-logo-link" to="/" >UStats</Link>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Navbar
