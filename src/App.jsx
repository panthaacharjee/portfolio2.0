import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Skill from "./pages/Skill"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import "remixicon/fonts/remixicon.css"

import { useRef, useEffect } from "react"
import gsap from "gsap"

const App = () => {
  const cursorRef = useRef(null)

  // useEffect(() => {
  //   // Smooth cursor movement
  //   const xTo = gsap.quickTo(cursorRef.current, "x", {
  //     duration: 0.3,
  //     ease: "power3.out",
  //   })

  //   const yTo = gsap.quickTo(cursorRef.current, "y", {
  //     duration: 0.3,
  //     ease: "power3.out",
  //   })

  //   const moveHandler = (e) => {
  //     xTo(e.clientX - 10) // center align
  //     yTo(e.clientY - 10)
  //   }

  //   window.addEventListener("mousemove", moveHandler)

  //   // Hover animation (grow cursor)
  //   const hoverElements = document.querySelectorAll("a, button")

  //   hoverElements.forEach((el) => {
  //     el.addEventListener("mouseenter", () => {
  //       gsap.to(cursorRef.current, {
  //         scale: 2,
  //         duration: 0.3,
  //       })
  //     })

  //     el.addEventListener("mouseleave", () => {
  //       gsap.to(cursorRef.current, {
  //         scale: 1,
  //         duration: 0.3,
  //       })
  //     })
  //   })

  //   return () => {
  //     window.removeEventListener("mousemove", moveHandler)
  //   }
  // }, [])

  return (
    <div>
      {/* Custom Cursor */}
      {/* <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-red-500 rounded-full pointer-events-none z-[999] mix-blend-difference"
      ></div> */}

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App