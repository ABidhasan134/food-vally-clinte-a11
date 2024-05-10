import React from 'react'
import Bannar from './components/bannar'
import {Helmet} from "react-helmet";
import FoodsItems from './components/foodsItems';
import MapAddress from './components/map';

const Home = () => {
  return (
    <div>
      
      <Helmet>
      <title>Home</title>
      </Helmet>

      <Bannar></Bannar>
      <FoodsItems></FoodsItems>
      <MapAddress></MapAddress>
    </div>
  )
}

export default Home
