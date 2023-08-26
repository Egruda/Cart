import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Sale from './components/Sale/Sale'


function App() {
  const [items, setitems] = useState([]);

  return (
    <>
       <Navbar />
       <Sale />
       <Home />
    </>
  )
}

export default App
