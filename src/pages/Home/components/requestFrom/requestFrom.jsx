import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const RequestFrom = ({food}) => {
    const { user,logOut,setUser,setReload} = useContext(AuthContext);
   console.log(food);
// get Currentdate 
   const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); 
const currentYear = currentDate.getFullYear();

const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

const handelSubmitRequest=(e)=>{
    e.preventDefault();
    const Expired_Date=e.target.expireddate.value;
    const Food_AddtonalInfo=e.target.addtonalInfo.value;
    const Food_Status="request";
    console.log(Expired_Date,Food_AddtonalInfo,Food_Status);
}
  return (
    <div className='flex justify-center'>
    <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}> Request</button>
<dialog id="my_modal_3" className="modal">
 <div className="modal-box">
   <form method="dialog">
     {/* if there is a button in form, it will close the modal */}
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   </form>
   <form className="card-body" onSubmit={handelSubmitRequest}>
    {/* food name and image url */}
   <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Food Name</span>
            <input
              type="text"
              defaultValue={food.Food_Name}
              name="foodname"
              placeholder="food name"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
          <div className="w-[50%]">
            <span>Food Image</span>
            <input
              type="text"
              defaultValue={food.Food_Image}
              name="foodImage"
              placeholder="Item Image"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
        </div>
        {/* food Id and donar email */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Food Id</span>
            <input
              type="text"
              defaultValue={food._id}
              name="foodId"
              placeholder="food Id"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
          <div className="w-[50%]">
            <span>Donar Email</span>
            <input
              type="text"
              defaultValue={user.email}
              name="useremail"
              placeholder="useremail"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
        </div>
        {/* donar name and email */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Donar Name</span>
            <input
              type="text"
              defaultValue={user.displayName}
              name="imageurl"
              placeholder="Image Url"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
          <div className="w-[50%]">
            <span>User Email</span>
            <input
              type="text"
              defaultValue={user.email}
              name="itemname"
              placeholder="Item name"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
        </div>
        {/* request date and USER EMAIL */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Request Date</span>
            <input
              type="text"
              defaultValue={dateString}
              name="requestDate"
              placeholder="requestDate"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
          <div className="w-[50%]">
            <span>Donar Email</span>
            <input
              type="text"
              defaultValue={food?.email}
              name="foodemail"
              placeholder="foodemail"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
        </div>
        {/* pick up location and expir date */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Pick up Location</span>
            <input
              type="text"
              defaultValue={food.Pickup_Location}
              name="location"
              placeholder="location"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
          <div className="w-[50%]">
            <span>Expired Date</span>
            <input
              type="date"
              defaultValue={food.Expired_Date}
              name="expireddate"
              placeholder="expireddate"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
        </div>
        {/* diable filed end */}
        <label name="addtonalInfo">Additonal Information</label>
        <textarea className='border-2' name="addtonalInfo" placeholder='Add somthing'></textarea>
        <button className='btn bg-sky-300 hover:bg-sky-500'>Confirm Requst</button>
    </form>
 </div>
</dialog>
    </div>
  )
}

export default RequestFrom
