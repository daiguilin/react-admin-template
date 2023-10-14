import { Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"
import Home from "@/views/Home"
// import About from "@/views/About"
// import User from "@/views/User"
// const Home = lazy(() => import("@/views/Home"))
const About = lazy(() => import("@/views/About"))
const User = lazy(() => import("@/views/User"))

const withLoadingComponent = (comp: JSX.Element) => (
    <Suspense fallback={<div>loading...</div>}>
        {comp}
    </Suspense>
)
//路由的第二种写法，新的写法
const routes = [
    //路由重定向
    {
        path: '/',
        element: <Navigate to="/user" />
    },
    //路由嵌套 
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/user',
                element: withLoadingComponent(<User />)
            },
            {
                path: '/about',
                element: withLoadingComponent(<About />)
            },
        ]
    },

    // {
    //     path: '/home',
    //     element: withLoadingComponent(<Home />)
    // },
    // {
    //     path: '/about',
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: '/user',
    //     element: withLoadingComponent(<User />)
    // },

]

export default routes;