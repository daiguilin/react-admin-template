import {Navigate } from "react-router-dom"
import Home from "@/views/Home"
import About from "@/views/About"
import User from "@/views/User"
//路由的第一种写法，旧的写法
const routes = [
    {
        path: '/',
        element: <Navigate to="/home"/>
    }, {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/user',
        element: <User />
    },
    
]

export default routes;