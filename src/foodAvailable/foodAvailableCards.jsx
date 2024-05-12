import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoFastFoodSharp } from 'react-icons/io5'
import { MdDateRange } from 'react-icons/md'
import { TfiTime } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const FoodAvailableCards = ({foodhave}) => {
  const shortLine=`Food, a symphony of flavors and textures, transcends cultural boundaries to unite humanity in a shared sensory experience. From the exotic spices of the East to the comforting simplicity of home-cooked meals, each dish tells a story of heritage, passion, and connection. In every bite, we taste not just nourishment but the richness of our shared human experience.`
    // console.log(foodhave)
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='my-2'>
    <div className="card card-compact w-auto bg-base-100 shadow-sm border-2">
      <figure className="lg:h-96 md:h-72 h-48 p-2">
        <img src={foodhave.Food_Image} alt="Photo of property" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodhave.Food_Name}</h2>
        <p>{foodhave?.Short_Description?foodhave.Short_Description:`${shortLine}`}</p>
        <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* location and segment */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-xl">
           <IoFastFoodSharp></IoFastFoodSharp>
            <p>{foodhave.Food_Quantity}</p>
          </div>
          <div className="flex items-center  text-xl">
            <CiLocationOn></CiLocationOn>
            <img className="h-[50px]" src={location} alt="" />
            <p>{foodhave.Pickup_Location}</p>
          </div>
        </div>
        {/* location and segment end */}
        {/* price and status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl">
            <MdDateRange></MdDateRange>
            <p>{foodhave.Expired_Date}</p>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <TfiTime></TfiTime>
            <p>{foodhave.Expired_Time}</p>
          </div>
        </div>
        <hr className="border-1 border-sky-400 w-full mt-6 border-dashed" />
        {/* price and status end */}
        <Link
          to={`/details/${foodhave._id}`}
          className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white"
        >
           View Details
        </Link>
      </div>
    </div>
  </div>
  )
}

export default FoodAvailableCards
