import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import App from "@/App"
import Home from "@/views/Home"
import About from "@/views/Page1"
//路由的第一种写法，旧的写法
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* 配置用户访问 / 的时候，重定向到/home路径 */}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter;