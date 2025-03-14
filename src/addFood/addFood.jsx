import React, { useContext } from "react";
import { AuthContext } from "../pages/context/AuthProvider";
import useAxiosSequ from "../hooks/useAxiosSequ";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosSequer=useAxiosSequ();
  const navigate=useNavigate()

  // console.log(user.email,user.displayName);
  
  const handelAddFood=(e)=>{
    e.preventDefault();
    const Food_Name=e.target.foodname.value;
    const Food_Image=e.target.foodimage.value;
    const Food_Quantity=e.target.foodQuantity.value;
    const Pickup_Location=e.target.foodlocation.value;
    const Expired_Date=e.target.expireddate.value;
    const Expired_Time=e.target.expiredtime.value;
    const name=e.target.donarname.value;
    const email=e.target.donaremail.value;
    const image=e.target.donarURL.value;
    const Food_Status=e.target.donetstatus.value;
    const Additional_Info=e.target.addtonalInfo.value;
   
    const Donator_Info={name,email,image}
    const addInfo={Food_Name,Food_Image,Food_Quantity,
        Pickup_Location,Expired_Date,Expired_Time,Food_Status,
        Additional_Info,Donator_Info }
        // console.log(addInfo)
    
       if(user.email){
        axiosSequer.post('/addData',addInfo)
        .then(res=>{
            // console.log(res.data)
            if(res.data.insertedId){
              toast("Food Created successfully. Thanks you for your contribution")
            }
        })
       }
       else{
        toast("Please login with email address To add data")  
          setTimeout(()=>{
            navigate("/login")
          },2000)
       }
  }
  return (
    <div>
      <Helmet>
                <title>Food Vally | Add food</title>
            </Helmet>
      <form className="mt-2 gap-2" onSubmit={handelAddFood}>
        {/* Food name food Img */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Food name</span>
            <input
              type="text"
              name="foodname"
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
              placeholder="Number of food"
              className=" mt-2 input input-bordered input-accent w-full"
              required
            />
          </div>
          <div className="w-[50%]">
            <span>Pickup location</span>
            <input
              type="text"
              //   defaultValue={potteryItem.item_name}
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
        {/* donar img and status */}
        <div className="flex gap-2 justify-center">
          <div className="w-[50%]">
            <span>Donar Image URL</span>
            <input
              type="text"
              defaultValue={user.photoURL}
              value={user.photoURL}
              name="donarURL"
              placeholder="Donar name"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
          </div>
          <div className="w-[50%]">
            <span>Donet Status</span>
            <input
              type="text"
              value="available"
              name="donetstatus"
              placeholder="Donet Status"
              className=" mt-2 input input-bordered input-accent w-full"
              disabled
            />
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
  );
};

export default AddFood;
