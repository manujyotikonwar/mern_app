import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import {  BrowserRouter , Routes,Route} from "react-router-dom" 

import Read from './component/Read'
import Creat from './component/Creat'
import Update from './component/Update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      
      <Route exact path="/" element={<Creat/>}/>
      <Route exact path="/all" element={<Read/>}/>
      <Route exact path="/:id" element={<Update/>}/>
    </Routes>
      
    </BrowserRouter> 
    </>
  )
}

export default App
