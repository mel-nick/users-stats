import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UsersList from './UsersList'
import Pagination from './Pagination'
import Spinner from '../spinner/Spinner'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const StatsTable = () => {

    const [users, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);

    useEffect(() => {
        axios.get('/api/users')
        .then(res =>{
            setData(res.data);
            setLoading(false)
        })
        .catch(err => console.error(err))      
    }, [setData, setLoading, currentPage, usersPerPage]);

    //Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        loading ? <Spinner /> : 
        <div className="tb-page">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-white">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Users List</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12">
                        <UsersList 
                            users={currentUsers} 
                            loading={loading} 
                        />
                        <Pagination 
                            usersPerPage={usersPerPage} 
                            totalUsers={users.length} 
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StatsTable
