import React, { useEffect, useState } from 'react'
import useAxiosSequ from '../../../hooks/useAxiosSequ'
import FoodCard from './foodCard';

const FoodsItems = () => {
    const [foodsItem,setFoodsItem]=useState([])
    const axiosSequer=useAxiosSequ();
    useEffect(()=>{
        axiosSequer.get('/homefood')
        .then(res=>{
            // console.log(res.data)
            setFoodsItem(res.data)
        })
    },[])
    // console.log(foodsItem);
  return (
    <div>
        <div className='text-center my-10'>
      <h1 className='text-3xl font-bold'>Donate Items</h1>
      <p>Generously donated essential supplies to support <br /> vulnerable communities in need, ensuring access to basic necessities and fostering hope for a brighter future.</p>
    </div>
        <div className="mx-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 relative sm:-top-12 md:top-0 lg:top-0">
    {
        foodsItem.slice(0, 6).map(food=>{
            return <FoodCard food={food}/>
        })
    }
    </div>
    </div>
  )
}

export default FoodsItems
