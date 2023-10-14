import { Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"
import Home from "@/views/Home"
// import About from "@/views/About"
// import User from "@/views/User"
// const Home = lazy(() => import("@/views/Home"))
const Page1 = lazy(() => import("@/views/Page1"))
const Page2 = lazy(() => import("@/views/Page2"))
const Page301 = lazy(() => import("@/views/Page301"))
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
        element: <Navigate to="/page1" />
    },
    //路由嵌套 
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: '/page2',
                element: withLoadingComponent(<Page2 />)
            },
            {
                path:"/page3/page301",
                element: withLoadingComponent(<Page301 />)
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/page1" />
    }
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