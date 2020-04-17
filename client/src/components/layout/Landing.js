import React from 'react'
import { Link } from 'react-router-dom'



const Landing = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link to="/users" className="btn btn-success m-5">View Stats</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing