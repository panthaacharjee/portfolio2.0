import Video from "../assets/eye.mp4"
import body from "../assets/logo.jpg"

const Home = () => {
  return (
    <div className="">
        {/* <div className=" h-[90vh] w-[100%] relative">
            <div className="fixed w-[100%] top-0 left-0 bg-black-color z-10">
                Ok
            </div>
            <video controls={false} autoPlay loop muted className="w-[100%] ">
                <source src={Video} type="video/mp4"/>
            </video>
            
        </div> */}
        <div className="v-container">
            <video controls={false} autoPlay loop muted className="background-clip">
                <source src={Video} type="video/mp4"/>
            </video>
           <div className="content">
                <div >
                    <div className="h-[150px] w-[150px] rounded-full overflow-x-hidden mx-auto">
                        <img src={body} alt="logo-img"/>
                    </div>
                    <h1>Pantha Acharjee</h1>
                    <p className="text-white  mt-3 text-md md:text-xl px-4 md:px-0">Software Engineer experienced in Python and Full-Stack Web development</p>

                    <div className=" flex justify-center items-center mt-6 mb-14 ">
                        <a className="bg-white ml-4 py-1 px-2 rounded-sm cursor-pointer border-2 hover:border-white hover:bg-black hover:text-white">
                            <i className="ri-linkedin-fill text-xl md:text-2xl"></i>
                        </a>
                        <a className="bg-white ml-4 py-1 px-2 rounded-sm cursor-pointer border-2 hover:border-white hover:bg-black hover:text-white">
                            <i className="ri-github-fill text-xl md:text-2xl"></i>
                        </a>
                        <a className="bg-white ml-4 py-1 px-2 rounded-sm cursor-pointer border-2 hover:border-white hover:bg-black hover:text-white">
                            <i className="ri-mail-fill text-xl md:text-2xl"></i>
                        </a>
                        <a className="bg-white ml-4 py-1 px-2 rounded-sm cursor-pointer border-2 hover:border-white hover:bg-black hover:text-white">
                            <i className="ri-behance-fill text-xl md:text-2xl"></i>
                        </a>
                    </div>

                    <a download href="https://drive.google.com/file/d/1TjHRULn23GRtNGDpl4oXIYjpNkuAoB8Q/view" className="text-white hover:text-lg"><i className="ri-file-list-2-line"></i> <span>Resume</span></a>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Home