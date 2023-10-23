import {useRoutes,useLocation,useNavigate} from "react-router-dom"
import routes from "@/router"
import {useEffect} from "react"
import {message} from "antd"
function ToLogin(){
  const navigeteTo = useNavigate()
  useEffect(()=>{
    navigeteTo("/login")
    message.warning("您还没有登录，请登录后再访问！")
  },[])
  return <div></div>
}
function ToPage1(){
  const navigeteTo = useNavigate()
  useEffect(()=>{
    navigeteTo("/page1")
    message.warning("您已经登录过了！")
  },[])
  return <div></div>
}
function BeforeRouterEnter() {
const outlet = useRoutes(routes);
const pathname = useLocation().pathname;
/*
后台管理系统两种经典的跳转情况：
1.如果访问的是登录页面，并且有token，跳转到首页
2.如果访问的不是登录页面，并且没有token，跳转到登录页
3.其余的都可以正常放行
*/
const token = localStorage.getItem("token")
  if (pathname === '/login' && token) {
    //这里不能直接用 useNavigate 来实现跳转，因为需要BeforeRouterEnter是一个正常的jsx组件
      return <ToPage1/>
  } 
  if (pathname !== '/login' && !token) {
    return <ToLogin/>
  }
  return outlet
}
function App() {
  return (
    <div className='app'>
      <BeforeRouterEnter/>
    </div>
  )
}

export default App
