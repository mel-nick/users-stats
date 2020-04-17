import React from 'react'
import { Link } from 'react-router-dom'


const NotFound404 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h1 className="not-found">Error 404</h1>
                        <h2 className="not-found-text text-danger">Sorry, page doesn't exist!</h2>
                        <Link to="/" className="btn btn-warning m-5" >Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound404
