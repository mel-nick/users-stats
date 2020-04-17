import React, {useEffect, useState, Fragment} from 'react'
import axios from 'axios'
import UsersList from './UsersList'
import Pagination from './Pagination'
import Spinner from '../spinner/Spinner'


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
        loading ? <Spinner /> : <Fragment>
        <div className="container">
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
        </Fragment>
    )
}

export default StatsTable
