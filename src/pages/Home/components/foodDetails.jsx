import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {Helmet} from "react-helmet";
import { IoFastFoodSharp, IoLocationOutline } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { TfiTime } from 'react-icons/tfi';
import RequestFrom from './requestFrom/requestFrom';

const FoodDetails = () => {
    const food=useLoaderData();
    console.log(food);
  return (
    // <div>
    //   {food.Donator_Info.name}
    // </div>
     <div className="container mx-auto mt-2">
     <Helmet>
           <title>{food.Food_Name}</title>
       </Helmet>
     
     <div className='flex justify-center gap-6'>
        <figure>
            <img src={food.Donator_Info.image} className='h-[200px] w-[200px] rounded-full' alt="" />
        </figure>
        <div>
            <h1>Donar:</h1>
            <p className='font-bold text-5xl'>{food.Donator_Info.name}</p>
        </div>
     </div>
     
     <div class="hero mt-24 bg-base-100 mb-10">
       <div class=" xl:flex xl:justify-evenly grid justify-center gap-20 ">
       <img
           src={food.Food_Image}
           class=" rounded-lg shadow-2xl xl:max-w-3xl w-auto "
         />
         <div>
           <h1 class="md:text-5xl lg:text-start text-center font-bold">{food.Food_Name}</h1>
           <p class="py-6 px-2">{food.Short_Description}</p>
           <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
           <h1 className="text-2xl text-sky-500 font-bold my-3">Know more:</h1>
           <p class="lg:py-6 py-3 px-2">{food.Long_Description}</p>
           <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
         
           {/* reant and status */}
           <h1 className="text-2xl text-sky-500 font-bold my-3">Date/Location:</h1>
           {/* location and segment */}
       <div className="flex md:justify-between justify-evenly">
         <div className="flex items-center md:gap-2 text-xl mx-3">
         <IoFastFoodSharp className="text-green-600"></IoFastFoodSharp>
           <p>{food.Food_Quantity}</p>
           </div>
           <div className="flex items-center gap-2 text-xl mx-3">
             <IoLocationOutline className="text-green-600"></IoLocationOutline>
           <p>{food.Pickup_Location}</p>
           </div>
       </div>
       {/* location and segment end */}
           <div className="flex md:justify-between justify-evenly items-center">
         <div className="flex items-center gap-2 text-xl mt-5">
         <MdDateRange className="text-green-600"></MdDateRange>
           <p>{food.Expired_Date}</p>
           </div>
           <div className="flex items-center gap-2 text-xl">
           <TfiTime className="text-green-600"></TfiTime>
           <p>{food.Expired_Time}</p>
           </div>
       </div>
           <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
         </div>
         
       </div>
     </div>
     
    <RequestFrom food={food}></RequestFrom>
   </div>
  )
}

export default FoodDetails
