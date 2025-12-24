
import { createBrowserRouter } from "react-router-dom";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pege/home/Home";
import Register from "../pege/register/Register";
import SignIn from "../pege/home/shared/signin/SignIn";
import JobDetails from "../pege/jobdetails/JobDetails";
import JobApplyPage from "../pege/JobApplyPage";

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
          path:"/jobs/:id",
          Component:JobDetails,
          loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
        },

        {
            path:"register",
            Component:Register
        },
        {
            path:"signin",
            Component:SignIn        
        },
        {
         path: "/apply/:id",
          Component: JobApplyPage
        }


    ]
    
  },
]);

export default router;
