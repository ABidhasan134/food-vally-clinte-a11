import React from 'react'
import { Helmet } from 'react-helmet';
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


const UpdateManage = ({food,handeldelete}) => {
   

    // console.log(food)
  return (
   
        <tr>
          <Helmet>
            <title>food vally | manage Food</title>
          </Helmet>
          <th onClick={()=>handeldelete(food._id)}><MdDeleteOutline className='text-5xl hover:border-2 hover:bg-red-50 p-2 rounded-full'></MdDeleteOutline> </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={food.Food_Image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{food.Food_Name}</div>
                <div className="text-sm opacity-50">Number of food {food.Food_Quantity}</div>
              </div>
            </div>
          </td>
          <td>
            Date: {food.Expired_Date}
            <br/>
            <span className="badge badge-ghost badge-sm">Time{food.Expired_Time}</span>
          </td>
          <td>{food.Pickup_Location}</td>
          <th>
            <button className="btn btn-ghost btn-xs">{food?.Food_Status}</button>
          </th>
          <th><Link to={`/updateall/${food._id}`}><button className='hover:text-green-400'>Update</button></Link></th>
        </tr>

  )
}

export default UpdateManage
