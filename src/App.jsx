import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Navbar from "../src/Index/Navbar";
import Home from "../src/Index/Home";
import SignIn from "../src/SignIn/SignIn";
import SignUp from "../src/SignUp/SignUp";
import Help from "../src/Help/Help";
import Error from "../src/components/404";
import Footer from "../src/Footer/Footer";
import React, { useState } from "react";
import Packages from "./Packages/Packages";
import PackageView from "./Packages/PackageView";
import UserDetail from "./Form/UserDetail";

const App = () => {
    const [packData, setPackData] = useState([])
    const CLick = (item) => {
        setPackData(item)
    }
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <Error />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/signin',
            element: <SignIn />
        },
        {
            path: '/help',
            element: <Help />
        },
        {
            path: '/packages/:title',
            element: <Packages method={CLick} />
        },
        {
            path: '/packages/:path/:title/:id',
            element: <PackageView packData={packData} />
        },
        {
            path: '/userdetails',
            element: <UserDetail />
        },
    ])
    return (
        <>
            <Navbar/>
            <RouterProvider router={router} />
            <Footer />

        </>
    )
}

export default App