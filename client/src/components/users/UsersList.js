import React from 'react'
import { useHistory  } from 'react-router-dom'

const UsersList = ({users}) => {

    const history = useHistory()

    return (             
            <div className="table-responsive-lg">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">IP Adress</th>
                            <th scope="col">Total Clicks</th>
                            <th scope="col">Total Page Views</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(user =>(
                            <tr className="tb-row" onClick={()=>history.push(`/users/${user.user_id}`)} key={user.user_id}>
                                    <th scope="row">{user.user_id}</th>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.ip_address}</td>
                                    <td>{user.total_pageviews}</td>
                                    <td>{user.total_clicks}</td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
               
    )
}

export default UsersList
