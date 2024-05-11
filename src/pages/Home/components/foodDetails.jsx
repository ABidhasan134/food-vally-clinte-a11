import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FoodDetails = () => {
    const id=useLoaderData();
    console.log(id);
  return (
    <div>
      card Details
    </div>
  )
}

export default FoodDetails
