
import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/Home/Home";
import Register from "../register/register";
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
        }

      ]
    },
  ]);

  export default Routers;
