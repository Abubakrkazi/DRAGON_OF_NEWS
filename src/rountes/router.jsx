import { createBrowserRouter } from "react-router-dom";


const router=createBrowserRouter([
    {
        path:"/",
        element:<h1>Home Page</h1>
    },
    {
        path:"/news",
        element:<h1>News Page</h1>
    },
    {
        path:"auth",
        element:<h1>Login Page</h1>
    },
    {
        path:"*",
        element:<h1>ERROR PAGE</h1>
    }
])

export default router;