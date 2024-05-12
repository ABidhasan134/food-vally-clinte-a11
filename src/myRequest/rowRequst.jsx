import React, { useContext } from 'react'
import { AuthContext } from '../pages/context/AuthProvider';

const RowRequst = ({food}) => {
  const {user}=useContext(AuthContext);
    // console.log(food)
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();
    const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
  return (
    <tr>
    <td><div className="font-bold">{user.displayName}r</div></td>
    <td>{food.Pickup_Location}</td>
    <td><span className="badge badge-ghost badge-sm">{food.Expired_Date}</span></td>
    {/* my few data I have missing this filed what I have create is inta */}
    <td>${food.Food_requestDate?food.Food_requestDate:dateString}</td>
    <td>${food.Food_Quantity}</td>
</tr>
  )
}

export default RowRequst
