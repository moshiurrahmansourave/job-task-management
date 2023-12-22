import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SingUp from "../pages/SingUp/SingUp";
import SingIn from "../pages/SingIn/SingIn";
import Dashboard from "../layout/Dashboard/Dashboard";
import Createtask from "../dashboardpage/Createtask/Createtask";
import Alltask from "../dashboardpage/Alltask/Alltask";
import Yourtask from "../dashboardpage/Yourtask/Yourtask";
import PrivateRoute from "../provider/PrivateRoute";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/singUP',
          element : <SingUp></SingUp>
        },
        {
          path: '/singIn',
          element: <SingIn></SingIn>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'createtask',
          element: <Createtask></Createtask>
        },
        {
          path: 'alltask',
          element: <Alltask></Alltask>,
          loader: () => fetch('http://localhost:5001/alltask')
        },
        {
          path: 'yourtask',
          element: <Yourtask></Yourtask>
        }
      ]
    }
  ]);