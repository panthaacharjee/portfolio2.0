import react  from "../assets/skill/react.png"
import mongodb from "../assets/skill/mongodb.png"
import git from "../assets/skill/github.png"
import node from "../assets/skill/node.png"
import tailwind from "../assets/skill/tailwind.png"
import vps from "../assets/skill/vps.png"
import html from "../assets/skill/html.png"
import css from "../assets/skill/css.png"
import aws from "../assets/skill/aws.png"
import js from "../assets/skill/js.png"
import redux from "../assets/skill/redux.png"
import sql from "../assets/skill/sql.png"

const Skill = () => {
  return (
    <div className="">
        <div className="container mx-auto mb-5">
            <p className="text-white font-mont text-2xl md:text-4xl font-semibold text-center">.</p>
            <div style={{width:"90%", margin:"0px auto", marginTop:"30px"}}>
                <div className="flex flex-col md:flex-row">
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={js} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Javascript</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={node} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Node JS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={git} className=" h-28 w-30"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Git Source Control</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={mongodb} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">MongoDB</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-0 md:mt-5">
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={redux} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Redux JS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={aws} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">AWS Server Service</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={react} className=" h-28 w-30"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">React JS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={vps} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">VPS Hosting Service</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-0 md:mt-5">
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={html} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Html</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={css} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">CSS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={tailwind} className=" h-28 w-30"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">Tailwind CSS</p>
                    </div>
                    <div className=" bg-slate-700 hover:bg-crimson  w-full md:w-6/12 lg:w-3/12  flex flex-col items-center justify-center py-2 rounded-xl h-60 mr-0 md:mr-5 mt-2 md:mt-2">
                        <div className="h-32">
                            <img src={sql} className=" h-32 w-32"/>
                        </div>
                        <p className="font-mont text-white font-medium text-xl">MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill