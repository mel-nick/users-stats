import React, {useEffect, useState, Fragment} from 'react'
import axios  from 'axios';
import Spinner from '../spinner/Spinner'
// import Moment from 'react-moment'
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

function GraphPage({match}) {

    const [user, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userViews, SetUserViews] = useState([])
    const [userClicks, SetClicksData] = useState([])

    useEffect(() => {
        axios.get(`/api/users/${match.params.user_id}`)
        .then(res =>{
            const data = res.data
            setData(data);
            SetUserViews(data.dateViews);
            SetClicksData(data.dateClicks);
            setLoading(false);            
        })
        .catch(err => console.error(err))      
    }, [setData, setLoading, match.params.user_id, SetClicksData, SetUserViews]);

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
        loading ? <Spinner/> : <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-12">
                {/* {userData.map((user, i)=>(
                    <h4 key={i} className="graph-user-name">{user.first_name} {' '} {user.last_name}</h4>
                ))} */}
                </div>
            </div>
            <div className="row">
                <div className="clo-12">
                    <Fragment>
                        <LineChart 
                            id={'clicks'}
                            width={800}
                            height={300}
                            data={chartDataClicks}
                            isDate={true}
                            xLabel={'Date'}
                            yLabel={'Clicks'}
                            hidePoints={true}
                            yMin={'0'}
                            />
                    </Fragment>

                    <Fragment>
                        <LineChart 
                            id={'views'}
                            width={800}
                            height={300}
                            data={chartDataViews}
                            isDate={true}
                            xLabel={'Date'}
                            yLabel={'Views'} 
                            hidePoints={true}
                            yMin={'0'}
                            />
                    </Fragment>
                    
                </div>
            </div>
        </div>
           
        </Fragment>
    )
}

export default GraphPage
