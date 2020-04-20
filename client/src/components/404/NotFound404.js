import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../users/Header'
import Footer from '../users/Footer'


const NotFound404 = () => {
    return (
        <div className="not-found">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12 nf404">
                    <h2 className="color-main">Error 404</h2>
                            <h3 className="not-found-text text-danger">Sorry, page doesn't exist!</h3>
                            <Link to="/" className="btn btn-main my-5" >Home Page</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound404
