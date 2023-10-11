import React from 'react'
// import { Button } from 'antd';
// import {DownOutlined} from "@ant-design/icons"
import {Outlet,Link} from "react-router-dom"

function App() {

  return (
    <div className='app'>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      {/* 占位符组件。类似于窗口，用来展示组件的，有点像vue中的router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
