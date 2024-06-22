import rabeya from "../assets/Project/12.png"
import proconnect from "../assets/Project/1.png"
import movie from "../assets/Project/9.png"
import travel from "../assets/Project/3.png"

import node from "../assets/skill/node.png"
import js from "../assets/skill/js.png"
import mongodb from "../assets/skill/mongodb.png"
import css from "../assets/skill/css.png"
import html from "../assets/skill/html.png"
import react from "../assets/skill/react.png"
import redux from "../assets/skill/redux.png"
import tailwindcss from "../assets/skill/tailwind.png"
import api from "../assets/skill/api.png"

const Project = () => {
  return (
    <div  className="container mx-auto py-20 flex flex-wrap">
        <div className="w-4/12 ">
            <div className="w-[95%] mx-auto bg-[#e6e6e6] py-3 rounded-lg shadow-lg shadow-black px-3">
                <div className="w-full">
                    <img src={rabeya} className="h-72 "/>
                </div>
                <div>
                    <h3 className="font-semibold text-center mt-5 text-lg">Builder ERP</h3>
                    <div className="flex items-center justify-center h-16 mb-2">
                        <img src={node} className="mr-1 w-16 h-16"/>
                        <img src={react} className="mr-1 w-10 h-10"/>
                        <img src={tailwindcss} className="mr-1 w-10 h-8"/>
                        <img src={mongodb} className="mr-1 w-20 h-24 mt-[-6px]"/>
                        <img src={redux} className="mr-1 w-10 h-10 mt-[-6px]"/>
                        
                    </div>
                    <div className="h-20 mt-[-10px]">
                        <p className="text-xs font-medium text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae numquam, mollitia vel unde dolor nihil molestias labore? Esse cumque inventore dolorem alias saepe iure atque sequi? Unde commodi quam iste?</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="https://erp-project-fontend.vercel.app" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Live</a>
                        <a href="https://github.com/panthaacharjee/erp-project-fontend" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Fontend</a>
                        <a href="https://github.com/panthaacharjee/erp-project-backend" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Backend</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-4/12 ">
            <div className="w-[95%] mx-auto bg-[#e6e6e6] py-3 rounded-lg shadow-lg shadow-black px-3">
                <div className="w-full">
                    <img src={proconnect} className="h-72 "/>
                </div>
                <div>
                    <h3 className="font-semibold text-center mt-5 text-lg">Proconnect-X</h3>
                    <div className="flex items-center justify-center  h-16 mb-2">
                        <img src={node} className="mr-1 w-16 h-16"/>
                        <img src={react} className="mr-1 w-10 h-10"/>
                        <img src={mongodb} className="mr-1 w-20 h-24 mt-[-6px]"/>
                        <img src={redux} className="mr-1 w-10 h-10 mt-[-6px]"/>
                        
                    </div>
                    <div className="h-20 mt-[-10px]">
                        <p className="text-xs font-medium text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae numquam, mollitia vel unde dolor nihil molestias labore? Esse cumque inventore dolorem alias saepe iure atque sequi? Unde commodi quam iste?</p>
                    </div>
                    <div className="flex justify-center items-center text-center">
                        <a href="https://proconnect-x-fontend.vercel.app" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Live</a>
                        <a href="https://github.com/panthaacharjee/proconnect-x-fontend" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Fontend</a>
                        <a href="https://github.com/panthaacharjee/proconnect-x-backend" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Backend</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-4/12 ">
            <div className="w-[95%] mx-auto bg-[#e6e6e6] py-3 rounded-lg shadow-lg shadow-black px-3">
                <div className="w-full">
                    <img src={movie} className="h-72 w-full"/>
                </div>
                <div>
                    <h3 className="font-semibold text-center mt-5 text-lg">Movie Shop</h3>
                    <div className="flex items-center justify-center h-16 mb-2">
                        <img src={react} className="mr-1 w-10 h-10"/>
                        <img src={redux} className="mr-1 w-10 h-10 mt-[-6px]"/>
                        <img src={api} className="mr-1 w-10 h-10 mt-[-6px]"/>
                    </div>
                    <div className="h-20 mt-[-10px]">
                        <p className="text-xs font-medium text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae numquam, mollitia vel unde dolor nihil molestias labore? Esse cumque inventore dolorem alias saepe iure atque sequi? Unde commodi quam iste?</p>
                    </div>
                    <div className="flex justify-center items-center text-center">
                        <a href="https://movie-fontend.vercel.app" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Live</a>
                        <a href="https://github.com/panthaacharjee/movie-fontend" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Fontend</a>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="w-4/12 mt-4">
            <div className="w-[95%] mx-auto bg-[#e6e6e6] py-3 rounded-lg shadow-lg shadow-black px-3">
                <div className="w-full">
                    <img src={travel} className="h-72 w-full"/>
                </div>
                <div>
                    <h3 className="font-semibold text-center mt-5 text-lg">Travel App</h3>
                    <div className="flex items-center justify-center h-16 mb-2">
                        <img src={html} className="mr-1 w-10 h-10"/>
                        <img src={css} className="mr-1 w-10 h-11"/>
                        {/* <img src={api} className="mr-1 w-10 h-10 mt-[-6px]"/> */}
                    </div>
                    <div className="h-20 mt-[-10px]">
                        <p className="text-xs font-medium text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae numquam, mollitia vel unde dolor nihil molestias labore? Esse cumque inventore dolorem alias saepe iure atque sequi? Unde commodi quam iste?</p>
                    </div>
                    <div className="flex justify-center items-center text-center">
                        <a href="https://travel-agency-five-weld.vercel.app" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Live</a>
                        <a href="https://github.com/panthaacharjee/travel-agency" target="_blank" className="bg-red-400 mr-4 px-5 py-1 rounded-md text-white font-semibold">Fontend</a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project