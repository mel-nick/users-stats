import { Link } from 'react-router-dom'
import React from 'react'
import footerBgSvg from '../../img/svg/footer_bg.svg'

const Footer = () => {

    const footerStyles = {
        background: `url(${footerBgSvg}) no-repeat center center`,
        backgroundSize: 'cover',
        paddingTop: '100px',
        paddingBottom: '20px',
        position: 'relative'
      }
      
    return (
        <footer className="footer" style={footerStyles}>
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 text-center mx-auto form-container">
                    <form className="form-inline subscribe-form justify-content-between flex-nowrap py-1">
                    <div className="form-group">
                        <input type="email" className="form-control footer-input" placeholder="Enter your email" />
                    </div>
                    <button type="button" className="btn btn-main btn-lg mr-1 text-white">Subscribe</button>
                    </form>
                </div>
                <div className="col-12 footer-info d-flex justify-content-between flex-nowrap align-items-center">
                    <div className="footer-logo">
                    <Link className="navbar-brand navbar-logo-link" to="/">UStats</Link>
                    </div>
                    <div className="footer-copyright-text">
                    <p className="text-white m-0"> Copyright © 2020</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
