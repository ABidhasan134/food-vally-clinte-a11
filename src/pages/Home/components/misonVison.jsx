import React from 'react'
import { Link } from 'react-router-dom'

const MisonVison = () => {
  return (
   <div className='my-2'>
    <div className='text-center my-10'>
      <h1 className='text-3xl font-bold'>Islamic Donation</h1>
      <p>Islamic donation encompasses Zakat, a mandatory contribution <br /> based on wealth, and Sadaqah, voluntary charity driven by compassion and generosity.</p>
    </div>
    {/* card Items */}
     <div className='lg:flex grid justify-evenly lg:gap-0 gap-3'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/vdgwPjR/aff-img.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">AFGHANISTAN EMERGENCY</h2>
    <p>We urgently supports Afghanistan earthquake victims</p>
    <div className="card-actions justify-center">
      <button className="btn bg-green-500 hover:bg-green-800 hover:text-white"><Link to="addfood">Donate</Link></button>
    </div>
  </div>
</div>
{/* card 2 */}
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ytimg.com/vi/ig5tL3Z5TNc/maxresdefault.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">PALESTINE EMERGENCY</h2>
    <p>We is providing urgent support to those affected by the crisis in Palestine</p>
    <div className="card-actions justify-center">
      <button className="btn bg-green-500 hover:bg-green-800 hover:text-white"><Link to="addfood">Donate</Link></button>
    </div>
  </div>
</div>
    </div>
   </div>
  )
}

export default MisonVison
