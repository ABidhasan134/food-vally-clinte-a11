import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../pages/context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosSequ from '../hooks/useAxiosSequ';

const UpdateAll = () => {
    const food=useLoaderData();
    const {user}=useContext(AuthContext);
    const axiosSequer=useAxiosSequ();
    // console.log(food)

    const handelAllUpdates=(e)=>{
        e.preventDefault();
    const Food_Name=e.target.foodname.value;
    const Food_Image=e.target.foodimage.value;
    const Food_Quantity=e.target.foodQuantity.value;
    const Pickup_Location=e.target.foodlocation.value;
    const Expired_Date=e.target.expireddate.value;
    const Expired_Time=e.target.expiredtime.value;
    const name=e.target.donarname.value;
    const email=e.target.donaremail.value;
    const Food_requestDate=e.target.requestDate.value;
    const Food_Status=e.target.donetstatus.value;
    const Additional_Info=e.target.addtonalInfo.value;
    const updateInfo={Food_Name,Food_Image,Food_Quantity,Pickup_Location,Expired_Date,Expired_Time,name,
        email,Food_requestDate,Food_Status,Additional_Info
    }
    axiosSequer.patch(`/updateall/${food._id}`,updateInfo)
    .then(res=>{
        // console.log(res.data);
        if(res.data.modifiedCount>0){
            toast("Update successful")
          }
    })
    // console.log(updateInfo);
    }
  return (
    <div>
    <Helmet>
              <title>Food Vally | {food.Food_Image}</title>
          </Helmet>
    <form className="mt-2 gap-2" onSubmit={handelAllUpdates}>
      {/* Food name food Img */}
      <div className="flex gap-2 justify-center">
        <div className="w-[50%]">
          <span>Food name</span>
          <input
            type="text"
            name="foodname"
            defaultValue={food.Food_Name}
            placeholder="Enter your food name"
            className=" mt-2 input input-bordered input-accent w-full"
            required
          />
        </div>
        <div className="w-[50%]">
          <span>Food Image</span>
          <input
            type="text"
            //   defaultValue={potteryItem.item_name}
            name="foodimage"
            placeholder="Food Image URL"
            defaultValue={food.Food_Image}
            className=" mt-2 input input-bordered input-accent w-full"
            required
          />
        </div>
      </div>
      {/* Food Quantity and location */}
      <div className="flex gap-2 justify-center">
        <div className="w-[50%]">
          <span>Food Quantity</span>
          <input
            type="text"
            name="foodQuantity"
            defaultValue={food.Food_Quantity}
            placeholder="Number of food"
            className=" mt-2 input input-bordered input-accent w-full"
            required
          />
        </div>
        <div className="w-[50%]">
          <span>Pickup location</span>
          <input
            type="text"
              defaultValue={food.Pickup_Location}
            name="foodlocation"
            placeholder="Location"
            className=" mt-2 input input-bordered input-accent w-full"
            required
          />
        </div>
      </div>
      {/* Expired date and time */}
      <div className="flex gap-2 justify-center">
        <div className="w-[50%]">
          <span>Expired date</span>
          <input
            type="date"
            name="expireddate"
            defaultValue={food.Expired_Date}
            placeholder="Enter expired date"
            className=" mt-2 input input-bordered input-accent w-full"
            required
            />
        </div>

        <div className="w-[50%]">
          <span>Expired Time</span>
          <input
            type="time"
            name="expiredtime"
            defaultValue={food.Expired_Time}
            placeholder="Enter expired time"
            className=" mt-2 input input-bordered input-accent w-full"
            required
          />
        </div>
      </div>
      {/* donar name and email */}
      <div className="flex gap-2 justify-center">
        <div className="w-[50%]">
          <span>Donar name</span>
          <input
            type="text"
            defaultValue={user.displayName}
            value={user.displayName}
            name="donarname"
            placeholder="Donar name"
            className=" mt-2 input input-bordered input-accent w-full"
            disabled
          />
        </div>
        <div className="w-[50%]">
          <span>Donar email</span>
          <input
            type="text"
            defaultValue={user.email}
            value={user.email}
            name="donaremail"
            placeholder="Donar email"
            className=" mt-2 input input-bordered input-accent w-full"
            disabled
          />
        </div>
      </div>
      {/* request date and status */}
      <div className="flex gap-2 justify-center">
        <div className="w-[50%]">
          <span>Request Date</span>
          <input
            type="date"
            defaultValue={food?.Food_requestDate || "Enter date"}
            name="requestDate"
            placeholder="Donar name"
            className=" mt-2 input input-bordered input-accent w-full"
            required
          />
        </div>

        <div className="w-[50%]">
            <span>Donet Status</span>
            <select
              name="donetstatus"
              class="mt-2 input input-bordered input-accent w-full"
              required
            >
              <option value={food.Food_Status}>{food.Food_Status}</option>
              <option value="available">available</option>
              <option value="request">request</option>
             
            </select>
          </div>
      </div>
      {/* additinol */}
      <div className="grid">
        <label name="addtonalInfo">Additonal Information</label>
        <textarea
          className="border-2"
          name="addtonalInfo"
          placeholder="Add somthing"
        ></textarea>
      </div>
      {/* add btn */}
      <button className="btn mt-2 w-full bg-sky-300 hover:bg-sky-500">
        Add Food
      </button>
    </form>
    <ToastContainer></ToastContainer>
  </div>
  )
}

export default UpdateAll
