import React, {useEffect, useState, Fragment} from 'react'
import axios  from 'axios'
import Spinner from '../spinner/Spinner'
import LineChart from 'react-linechart'
import { Link } from 'react-router-dom'
import '../../../node_modules/react-linechart/dist/styles.css'
import Header from './Header'
import Footer from './Footer'
import NotFound404 from '../404/NotFound404'


function GraphPage({match}) {

    const [user, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userViews, SetViews] = useState([])
    const [userClicks, SetClicks] = useState([])

    useEffect(() => {
        axios.get(`/api/users/${match.params.user_id}`)
        .then(res =>{
            const data = res.data
            setData(data);
            SetViews(data.dateViews);
            SetClicks(data.dateClicks);
            setLoading(false);
        })
        .catch(err => console.error(err))      
    }, [setData, setLoading, match.params.user_id, SetClicks, SetViews]);


  //Charts
    const chartDataClicks = [
        {									
            color: "red", 
            points: userClicks 
        }
    ];
    const chartDataViews = [
        {									
            color: "green", 
            points: userViews 
        }
    ];
    return (
        loading ? <Spinner/> 
         : user.user.error ? <NotFound404 />
         : <Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb bg-white">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/users">Users List</Link></li>
                                    {user.user.map((user, i)=>(
                                <li key={i} className="breadcrumb-item active" aria-current="page">{user.first_name} {' '} {user.last_name}</li>
                            ))}
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        {user.user.map((user, i)=>(
                            <h4 key={i} className="text-bold">{user.first_name} {' '} {user.last_name}</h4>
                        ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-5">
                            <Fragment>
                            <h6 className="chart-name text-bold mt-5">Clicks</h6>
                            <button onClick={()=>{SetClicks(user.dateClicks.slice(0,7))}} className="btn btn-main m-2">1 week</button>
                            <button onClick={()=>{SetClicks(user.dateClicks.slice(0,14))}} className="btn btn-main m-2">2 weeks</button>
                            <button onClick={()=>SetClicks(user.dateClicks)} className="btn btn-main m-2">1 month</button>
                            <div className="table-responsive-lg">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                        <td className="chart-row"> <LineChart 
                                    id={'clicks'}
                                    width={1140}
                                    height={400}
                                    data={chartDataClicks}
                                    isDate={true}
                                    xLabel={''}
                                    yLabel={''}
                                    hidePoints={true}
                                    yMin={'0'}
                                    ticks={userClicks.length}
                                    /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                               
                            </Fragment>                    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <Fragment>
                            <h6 className="chart-name text-bold">Viwes</h6>
                            <button onClick={()=>{SetViews(user.dateViews.slice(0,7))}} className="btn btn-main m-2">1 week</button>
                            <button onClick={()=>{SetViews(user.dateViews.slice(0,14))}} className="btn btn-main m-2">2 weeks</button>
                            <button onClick={()=>SetViews(user.dateViews)} className="btn btn-main m-2">1 month</button>
                            <div className="table-responsive-lg">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="chart-row"> 
                                            <LineChart 
                                                id={'views'}
                                                width={1140}
                                                height={400}
                                                data={chartDataViews}
                                                isDate={true}
                                                xLabel={''}
                                                yLabel={''} 
                                                hidePoints={true}
                                                yMin={'0'}
                                                ticks={userClicks.length}
                                            />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                                
                            </Fragment>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
    )
}

export default GraphPage
