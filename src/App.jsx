import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Sale from './components/Sale/Sale'
import { Outlet } from "react-router-dom";


function App({cart}) {
  

  return (
    <>
       <Navbar cart={cart}/>
       <Sale />
       <Outlet />
    </>
  )
}

export default App
