import React from 'react'
import {useRoutes} from "react-router-dom"
import routes from "@/router"
function App() {
const outlet = useRoutes(routes);
  return (
    <div className='app'>
      {outlet}
    </div>
  )
}

export default App
