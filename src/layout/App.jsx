import { Outlet } from "react-router-dom"
import Navbar from "../global/header/navbar"
// import { StickyNavbar } from "../global/header/testNav"



function App() {


  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      {/* <StickyNavbar></StickyNavbar> */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
