import React from 'react'
import Bannar from './components/bannar'
import {Helmet} from "react-helmet";
import FoodsItems from './components/foodsItems';
import MapAddress from './components/map';
import MisonVison from './components/misonVison';

const Home = () => {
  return (
    <div>
      
      <Helmet>
      <title>Home</title>
      </Helmet>

      <Bannar></Bannar>
      <FoodsItems></FoodsItems>
      <MisonVison></MisonVison>
      <MapAddress></MapAddress>
    </div>
  )
}

export default Home
