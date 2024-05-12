import React, { useEffect, useState } from 'react'
import useAxiosSequ from '../hooks/useAxiosSequ'

const RequestFood = () => {
    const [reqFood,setReqFood]=useState();
    const [loading, setLoading] = useState(true);
    const axiosSequer=useAxiosSequ();
    useEffect(() => {
        axiosSequer.get('/request', { params: { status: 'request' } })
            .then(res => {
                setReqFood(res.data);
                setLoading(false);
                console.log(res.data)
                 
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
    <div>
      hi
    </div>
  )
}

export default RequestFood
