
import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/Home/Home";
import Register from "../register/register";
import LogIn from "../log/LogIn";
import LogOut from "../log/logOut";
import FoodDetails from "../pages/Home/components/foodDetails";
import PriveteRoute from "./priveteRoute";
import AddFood from "../addFood/addFood";
import FoodAvailable from "../foodAvailable/foodAvailable";
// import useAxiosSequ from "../hooks/useAxiosSequ";
// const {axiosSequer}=useAxiosSequ();
const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/logout",
          element:<LogOut></LogOut>
        },
        {
          path: '/details/:id',
          element: <PriveteRoute><FoodDetails></FoodDetails></PriveteRoute>,
          // loader: ({params})=>axiosSequer.get(`/foodsingledetails/${params.id}`),
          loader: ({params})=>fetch(`http://localhost:5000/foodsingledetails/${params.id}`)
        },
        {
          path: "/addfood",
          element: <PriveteRoute><AddFood></AddFood></PriveteRoute>
        },
        {
          path: "/availablefood",
          element: <FoodAvailable></FoodAvailable>,
        }
      ]
    },
  ]);

  export default Routers;
