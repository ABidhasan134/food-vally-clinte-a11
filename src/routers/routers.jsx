
import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/Home/Home";
const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default Routers;
