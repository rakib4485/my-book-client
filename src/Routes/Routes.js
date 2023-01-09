import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/About/About/About";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media/Media";
import Message from "../Pages/Message/Message/Message";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <PrivateRoutes><About></About></PrivateRoutes>
            },
            {
                path: '/media',
                element: <PrivateRoutes><Media></Media></PrivateRoutes>
            },
            {
                path: '/message',
                element: <PrivateRoutes><Message></Message></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])