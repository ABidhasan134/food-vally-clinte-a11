import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../pages/context/AuthProvider';
import useAxiosSequ from '../hooks/useAxiosSequ';
import UpdateManage from './updateManage';

const ManageFood = () => {
    const [myFood,setMyFood]=useState([]);
    const [loading, setLoading] = useState(true);
    const {user}=useContext(AuthContext);
    // console.log(user.email);
    const axiosSequer = useAxiosSequ();
    useEffect(() => {
        axiosSequer.get('/managefood', { params: { email: `${user.email}` } })
            .then(res => {
                setMyFood(res.data);
                setLoading(false);
                 
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
    // console.log(myFood)
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <div></div>
            </label>
          </th>
          <th>Name</th>
          <th>Expired Date & Time</th>
          <th>Location</th>
          <th>Food Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
      {
        myFood.map(food=>{
            return <UpdateManage food={food} key={food._id}/>
        })
      }
      
      </tbody>
    
      
    </table>
  </div>
  )
}

export default ManageFood
