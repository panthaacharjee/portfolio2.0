import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useState, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [text] = useState("Acharjee")
  const [sidebar, setSidebar] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" })

  const logoRef = useRef(null)
  const sidebarRef = useRef(null)

  // Split text into spans
  useEffect(() => {
    const letters = text.split("")
    logoRef.current.innerHTML = letters
      .map((l) => `<span class="inline-block">${l}</span>`)
      .join("")
  }, [text])

  // Logo animation
  useGSAP(() => {
    gsap.from(".logo-animation span", {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power3.out",
    })
  })

  // Sidebar animation
  useEffect(() => {
    if (sidebar) {
      gsap.to(sidebarRef.current, {
        right: 0,
        duration: 0.5,
        ease: "power3.out",
      })

      gsap.from(".menu li", {
        x: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
      })
    } else {
      gsap.to(sidebarRef.current, {
        right: "-100%",
        duration: 0.4,
        ease: "power3.in",
      })
    }
  }, [sidebar])

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-blur-color py-4 fixed w-full backdrop-blur-md z-50">
        <div className="container mx-auto flex justify-between items-center">

          <div className="w-4/12">
            <p className="text-xl uppercase font-semibold text-white">
              Pantha{" "}
              <span ref={logoRef} className="logo-animation"></span>
            </p>
          </div>

          <div className="nav-container flex gap-6 text-white">
            {["HOME", "PROJECT", "SKILL"].map((item, i) => (
              <Link
                key={i}
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="bg-blur-color w-full fixed z-50 backdrop-blur-md px-5 py-3 md:hidden flex justify-between items-center">
        <p className="text-md uppercase font-semibold text-white">
          PANTHA ACHARJEE
        </p>
        <p className="text-white text-lg" onClick={() => setSidebar(true)}>
          <i className="ri-menu-line"></i>
        </p>
      </div>

      {/* Sidebar */}
      {isTabletOrMobile && (
        <div
          ref={sidebarRef}
          className="h-screen w-[70%] bg-blur-color fixed top-0 right-[-100%] z-50 text-white"
        >
          <div className="px-4 py-3 flex justify-between items-center">
            <p>MENU</p>
            <p className="text-xl" onClick={() => setSidebar(false)}>
              <i className="ri-close-line"></i>
            </p>
          </div>

          <ul className="menu font-bold px-5 py-10">
            {["Home", "Project", "Skill"].map((item, i) => (
              <li key={i} className="mt-6 text-lg">
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setSidebar(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar