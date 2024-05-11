import { Outlet } from "react-router-dom"
import Navbar from "../global/header/navbar"
import Footer from "../global/footer/footer"
// import { StickyNavbar } from "../global/header/testNav"



function App() {


  return (
    <div>
  <div className="container mx-auto">
      <Navbar></Navbar>
      {/* <StickyNavbar></StickyNavbar> */}
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default App
