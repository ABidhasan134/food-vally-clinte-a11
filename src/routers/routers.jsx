import { createBrowserRouter } from "react-router-dom";
import AddFood from "../addFood/addFood";
import Error from "../error/error";
import FoodAvailable from "../foodAvailable/foodAvailable";
import App from "../layout/App";
import LogIn from "../log/LogIn";
import LogOut from "../log/logOut";
import ManageFood from "../managFood/manageFood";
import UpdateAll from "../managFood/updateAll";
import RequestFood from "../myRequest/requestFood";
import Home from "../pages/Home/Home";
import FoodDetails from "../pages/Home/components/foodDetails";
import Register from "../register/register";
import PriveteRoute from "./priveteRoute";
// import useAxiosSequ from "../hooks/useAxiosSequ";
// const {axiosSequer}=useAxiosSequ();
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/logout",
        element: <LogOut></LogOut>,
      },
      {
        path: "/details/:id",
        element: (
          <PriveteRoute>
            <FoodDetails></FoodDetails>
          </PriveteRoute>
        ),
        // loader: ({params})=>axiosSequer.get(`/foodsingledetails/${params.id}`),
        loader: ({ params }) =>
          fetch(
            `https://hunger-food-chi.vercel.app/foodsingledetails/${params.id}`
          ),
      },
      {
        path: "/addfood",
        element: (
          <PriveteRoute>
            <AddFood></AddFood>
          </PriveteRoute>
        ),
      },
      {
        path: "/availablefood",
        element: <FoodAvailable></FoodAvailable>,
      },
      {
        path: "/request",
        element: (
          <PriveteRoute>
            <RequestFood></RequestFood>
          </PriveteRoute>
        ),
      },
      {
        path: "/managefood",
        element: (
          <PriveteRoute>
            <ManageFood></ManageFood>
          </PriveteRoute>
        ),
      },
      {
        path: "/updateall/:id",
        element: <UpdateAll></UpdateAll>,
        loader: ({ params }) =>
          fetch(
            `https://hunger-food-chi.vercel.app/foodsingledetails/${params.id}`
          ),
      },
    ],
  },
]);

export default Routers;
