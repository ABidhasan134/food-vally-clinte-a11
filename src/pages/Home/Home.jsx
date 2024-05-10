import React from 'react'
import Bannar from './components/bannar'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
      
      <Helmet>
      <title>Home</title>
        
      </Helmet>
      <Bannar></Bannar>
    </div>
  )
}

export default Home
