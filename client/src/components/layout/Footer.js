import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 text-center mx-auto form-container">a
                    <form className="form-inline subscribe-form justify-content-between flex-nowrap py-1">
                    <div className="form-group">
                        <input type="email" className="form-control footer-input" placeholder="Enter your email" />
                    </div>
                    <button type="button" className="btn btn-purchase btn-lg mr-1 text-white">Subscribe</button>
                    </form>
                </div>
                <div className="col-12 footer-info d-flex justify-content-between flex-nowrap">
                    <div className="footer-logo">
                    <Link className="navbar-brand navbar-logo-link" to="/">StatsApp</Link>
                    </div>
                    <div className="footer-copyright tex">
                    <p className="text-white"> Copyright © 2020</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
