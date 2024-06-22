import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import 'remixicon/fonts/remixicon.css'
import Skill from "./pages/Skill"
import { useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Contact from "./pages/Contact"
import Project from "./pages/Project"
// import Sidebar from "./components/Sidebar"

const App = () => {
  const [x, setX]= useState()
  const [y, setY] =useState()

  

  const mouseEvent = (e)=>{
    setX(e.clientX)
    setY(e.clientY)
    console.log(e)
  }

  useGSAP(()=>{
    gsap.to(".box",{
      x:x,
      y:y,
      // delay:0.1,
      // duration:0.5,
      ease:"power2.out"
    })
  },[x, y])
  return (
    <div onMouseMove={mouseEvent}>
      <div className="box">

      </div>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App