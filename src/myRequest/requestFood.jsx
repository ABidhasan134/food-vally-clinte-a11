import React, { useEffect, useState } from 'react'
import useAxiosSequ from '../hooks/useAxiosSequ'
import RowRequst from './rowRequst';
import { Helmet } from 'react-helmet';

const RequestFood = () => {
    const [reqFood,setReqFood]=useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSequer=useAxiosSequ();
    useEffect(() => {
        axiosSequer.get('/request', { params: { status: 'request' } })
            .then(res => {
                setReqFood(res.data);
                setLoading(false);
                // console.log(res.data)
                 
            })
            .catch(error => {
                console.error('Error fetching available food:', error);
                setLoading(false);
            });
    }, [axiosSequer]);

    if (loading) {
        return <div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>;
    }
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>food vally | My Request </title>
      </Helmet>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>PicUp Location</th>
            <th>Exp: Date</th>
            <th>requ data</th>
            <th>Donnated Amounte</th>
          </tr>
        </thead>
        <tbody>
        {
     reqFood.map((food)=>{
  return <RowRequst food={food} key={food._id}/>
  
})
}
        </tbody>
        
      </table>
    </div>
  )
}


export default RequestFood
