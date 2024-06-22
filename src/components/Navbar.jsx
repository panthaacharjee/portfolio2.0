import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'

import { Link } from "react-router-dom"
// import Sidebar from "./Sidebar"

const Navbar = () => {
  const [text, setText] = useState(`Acharjee`)
  const [sidebar, setSidebar]  = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  const handleSidebar =()=>{
    setSidebar(true)
  }
  const handleSidebarClose =()=>{
    setSidebar(false)
  }
  
  // useEffect(()=>{
  //   handleSidebar()
  // },[handleSidebar])
  // const back=()=>{
  //   const splitText = text.split("")

  //   var clutter = ""
  //   splitText.forEach((i)=>{
  //       clutter=  clutter + `<span>${i}</span>`
  //   })
  //   setText(clutter)
  // }  
  // back()

  // useGSAP(()=>{
  //   gsap.from(".logo-animation span" ,{
  //     y:100,
  //     stagger:0.3,
  //     duration:0.3,
  //     delay:0.5,
  //     opacity:0
  //   })
  // })
  // useEffect(()=>{
  //   // back()
  // })
  return (
    <>
      <nav className=' bg-blur-color py-4 fixed w-full backdrop-blur-md z-50'>
          <div className="container mx-auto flex justify-between items-center">
              <div className="w-4/12">
                <p className='text-xl uppercase font-semibold text-white'>Pantha <span className="logo-animation">{text}</span></p>
              </div>
              <div className="nav-container blue circleBehind">
                  <Link to="/">HOME</Link>
                  <Link to="/project">PROJECT</Link>
                  <Link to="/skill">ABOUT</Link>
                  <Link to="/contact">CONTACT</Link>
              </div>
          </div>
      </nav>
      <div className="bg-blur-color w-full fixed z-50 backdrop-blur-md px-5 py-3 md:hidden flex justify-between items-center">
        <p className="text-md  uppercase font-semibold text-white">PANTHA ACHARJEE</p>
        <p className="text-white text-lg" onClick={handleSidebar}><i className="ri-menu-line"></i></p>
      </div>
      <>
     {isTabletOrMobile && <div className={`h-screen w-[70%] bg-blur-color backdrop-blur-sm fixed top-0 ${sidebar ? "right-[0%]": "right-[-100%]"} z-50 text-white duration-100 delay-75`}>
        <div className=" bg-blur-color  px-4 py-3 flex items-center justify-between">
            <p>SIDEBAR</p>
            <p className="text-xl close" onClick={handleSidebarClose}><i className="ri-close-line"></i></p>
        </div>
        <div className="font-bold px-5 py-10 menu">
            <li className="mt-4" onClick={()=>setSidebar(false)}>
                <Link to="/">Home</Link>
            </li>
            <li className="mt-4" onClick={()=>setSidebar(false)}>
                <Link to="/project">Project</Link>
            </li>
            <li className="mt-4" onClick={()=>setSidebar(false)}>
                <Link to="/skill">About</Link>
            </li>
            <li className="mt-4" onClick={()=>setSidebar(false)}>
                <Link to="/contact">Contact</Link>
            </li>
        </div>
        </div>}
    </>
    </>
  )
}

export default Navbar