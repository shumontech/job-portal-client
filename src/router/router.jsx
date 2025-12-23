
import { createBrowserRouter } from "react-router-dom";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pege/home/Home";
import Register from "../pege/register/Register";
import SignIn from "../pege/home/shared/signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"register",
            Component:Register
        },
        {
            path:"signin",
            Component:SignIn        }
    ]
    
  },
]);

export default router;
