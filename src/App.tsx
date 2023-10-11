import React from 'react'
import {useRoutes,Link} from "react-router-dom"
import routes from "@/router"
function App() {
const outlet = useRoutes(routes);
  return (
    <div className='app'>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/user">user</Link>
      {outlet}
    </div>
  )
}

export default App
