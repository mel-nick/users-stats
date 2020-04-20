import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer-secondary">
            <div className="container">                
                <div className="col-12 footer-info d-flex justify-content-between flex-nowrap align-items-center">
                    <div className="footer-logo">
                    <Link className="navbar-brand navbar-logo-link" to="/">StatsApp</Link>
                    </div>
                    <div className="footer-copyright-text">
                    <p className="text-white m-0"> Copyright © 2020</p>
                    </div>
                </div>
                </div>
        </footer>
    )
}

export default Footer
