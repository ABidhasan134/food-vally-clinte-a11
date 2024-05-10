import React from 'react'
const MapAddress = () => {
  return (
    
    <div className='relative -z-10 sm:z-10'>
    
    <div className='flex justify-evenly sm:flex-row-reverse flex-col mt-2'>
      <div className='grid  bg-orange-50 p-6  sm:w-2/3 w-full'>
        <h1 className='text-5xl font-bold'>Feed Back</h1>
      <form className='mt-2 ' >
      <input type="text" placeholder="Name" className=" mt-2 input input-bordered input-accent w-full" />
      <input type="text" placeholder="phone number" className=" mt-2 input input-bordered input-accent w-full" />
      <textarea className="textarea textarea-accent w-full  mt-2 " placeholder="give us feed back"></textarea>
      <button className=" mt-2 btn btn-outline btn-accent w-full">submit</button>
      </form>
      </div>
      

    </div>
  </div>
    
  )
}

export default MapAddress
