import React from 'react'
import { Link } from "react-router-dom";
// import location  from "../../../../public/img/location.png";
import { CiLocationOn } from "react-icons/ci";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { TfiTime } from "react-icons/tfi";

const FoodCard = ({food}) => {
    // console.log(food)
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
      <figure className="lg:h-96 md:h-72 h-48 p-2">
        <img src={food.Food_Image} alt="Photo of property" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.Food_Name}</h2>
        <p>{food.Short_Description}</p>
        <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* location and segment */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
           <IoFastFoodSharp></IoFastFoodSharp>
            <p>{food.Food_Quantity}</p>
          </div>
          <div className="flex items-center  text-xl">
            <CiLocationOn></CiLocationOn>
            <img className="h-[50px]" src={location} alt="" />
            <p>{food.Pickup_Location}</p>
          </div>
        </div>
        {/* location and segment end */}
        {/* price and status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl">
            <MdDateRange></MdDateRange>
            <p>{food.Expired_Date}</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <TfiTime></TfiTime>
            <p>{food.Expired_Time}</p>
          </div>
        </div>
        <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* price and status end */}
        <Link
          to={`/details/${food._id}`}
          className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
        >
           View Details
        </Link>
      </div>
    </div>
  </div>


  )
}

export default FoodCard
