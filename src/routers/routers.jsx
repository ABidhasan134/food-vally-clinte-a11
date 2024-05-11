
import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/Home/Home";
import Register from "../register/register";
import LogIn from "../log/LogIn";
import LogOut from "../log/logOut";
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
        }

      ]
    },
  ]);

  export default Routers;
