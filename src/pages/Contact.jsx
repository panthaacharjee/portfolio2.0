import { useGSAP } from "@gsap/react"
import contact from "../assets/ninja.png"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

const Contact = () => {
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
    // if(isTabletOrMobile){
    //     useGSAP(()=>{
    //         gsap.from("#contact-image", {
    //             opacity:0,
    //             y:-1000,
    //             stagger:0.3,
    //             duration:0.8
    //         })
    //         gsap.from("#contact-form", {
    //             opacity:0,
    //             y:1000,
    //             duration:0.8
    //         })
    //     })
    // }else{
    //     useGSAP(()=>{
    //         gsap.from("#contact-image", {
    //             opacity:0,
    //             x:-1000,
    //             stagger:0.3,
    //             duration:0.8
    //         })
    //         gsap.from("#contact-form", {
    //             opacity:0,
    //             x:1000,
    //             duration:0.8
    //         })
    //     })
    // }

    const handleSubmit = ()=>{
        alert("Thanks for submitting")
    }
  return (
    <div className="flex justify-center items-center py-12 md:pt-20 md:h-screen  mb-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between w-[90%] md:w-[60%] h-[70vh]">
            <div className="w-full  md:w-6/12 bg-gray-500 px-5 py-3 md:py-0 flex items-center  md:rounded-tl-xl md:rounded-bl-xl rounded-lg" id="contact-image">
                <img src={contact} className="rounded-2xl "/>
            </div>
            <div className="w-full md:w-6/12  mt-4 md:mt-0  py-5 md:py-0 bg-[#45b897] md:rounded-tr-xl md:rounded-br-xl rounded-lg flex items-center" id="contact-form"> 
                {/* <div className=" bg-gray-400 py-2 px-5">
                    <p className="text-white">Any Question?</p>
                </div> */}
                <form className="w-[96%] px-5" onSubmit={handleSubmit}>
                    <div>
                        {/* <label className="text-white font-semibold">Name</label> */}
                        <input type="text" className="w-full px-2 py-2 mt-2 rounded-md" placeholder="Name" required/>
                    </div>
                    <div className="mt-5">
                        {/* <label className="text-white font-semibold">Email</label> */}
                        <input type="email" className="w-full px-2 py-2 mt-2 rounded-md" placeholder="Email" required/>
                    </div>
                    <div className="mt-5">
                        <textarea className="w-full px-2 py-2 mt-2 rounded-md h-44" placeholder="Comment"></textarea>
                    </div>
                    <div className="text-right">
                        <button className="bg-white px-5 py-1 rounded-md mt-5 flex items-center btn-translate"><p className="text-md font-semibold">Send</p><i className="ri-arrow-right-fill text-xl"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact