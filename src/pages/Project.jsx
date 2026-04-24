import rabeya from "../assets/Project/12.png"
import proconnect from "../assets/Project/1.png"
import movie from "../assets/Project/9.png"
import travel from "../assets/Project/3.png"
import ecommerce from "../assets/Project/13.png"
import ecommerceAdmin from "../assets/Project/14.png"

import node from "../assets/skill/node.png"
import mongodb from "../assets/skill/mongodb.png"
import css from "../assets/skill/css.png"
import html from "../assets/skill/html.png"
import react from "../assets/skill/react.png"
import redux from "../assets/skill/redux.png"
import tailwindcss from "../assets/skill/tailwind.png"
import api from "../assets/skill/api.png"

const projects = [
    {
        title: "Ecommerce Project",
        image: ecommerce,
        tech: [node, react, tailwindcss, mongodb, redux],
        desc: "Eccommerce platform with user authentication, product management, and shopping cart.",
        live: "https://eccomerce-user-panel.vercel.app",
        frontend: "https://github.com/panthaacharjee/eccomerce-user-panel",
        backend: "https://github.com/panthaacharjee/eccomerce-server",
    },
    {
        title: "Ecommerce Admin Panel",
        image: ecommerceAdmin,
        tech: [node, react, tailwindcss, mongodb, redux],
        desc: "Ecommerce admin dashboard for managing products, orders, and users with analytics.",
        live: "https://eccomerce-admin-panel.vercel.app",
        frontend: "https://github.com/panthaacharjee/eccomerce-admin-panel",
        backend: "https://github.com/panthaacharjee/eccomerce-server",
    },
    {
        title: "Builder ERP",
        image: rabeya,
        tech: [node, react, tailwindcss, mongodb, redux],
        desc: "Full ERP system with inventory, orders, and user management.",
        live: "https://erp-project-fontend.vercel.app",
        frontend: "https://github.com/panthaacharjee/erp-project-fontend",
        backend: "https://github.com/panthaacharjee/erp-project-backend",
    },
    {
        title: "Proconnect-X",
        image: proconnect,
        tech: [node, react, mongodb, redux],
        desc: "Professional networking platform with authentication and dashboard.",
        live: "https://proconnect-x-fontend.vercel.app",
        frontend: "https://github.com/panthaacharjee/proconnect-x-fontend",
        backend: "https://github.com/panthaacharjee/proconnect-x-backend",
    },
    {
        title: "Movie Shop",
        image: movie,
        tech: [react, redux, api],
        desc: "Movie browsing app with API integration and state management.",
        live: "https://movie-fontend.vercel.app",
        frontend: "https://github.com/panthaacharjee/movie-fontend",
    },
    {
        title: "Travel App",
        image: travel,
        tech: [html, css],
        desc: "Simple travel booking UI with clean design and responsiveness.",
        live: "https://travel-agency-five-weld.vercel.app",
        frontend: "https://github.com/panthaacharjee/travel-agency",
    },
]

const Project = () => {
    return (
        <div className="container mx-auto px-4 py-20">

            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
                My Projects
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="bg-[#e6e6e6] rounded-xl shadow-lg overflow-hidden 
            transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >

                        {/* Image */}
                        <div className="h-56 overflow-hidden">
                            <img
                                src={project.image}
                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col justify-between h-[260px]">

                            <h3 className="text-lg font-semibold text-center">
                                {project.title}
                            </h3>

                            {/* Tech Icons */}
                            <div className="flex justify-center flex-wrap gap-2 my-3">
                                {project.tech.map((tech, index) => (
                                    <img key={index} src={tech} className="w-8 h-8 object-contain" />
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-center text-gray-700 line-clamp-3">
                                {project.desc}
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-center gap-3 mt-4 flex-wrap">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-white text-sm"
                                >
                                    Live
                                </a>

                                {project.frontend && (
                                    <a
                                        href={project.frontend}
                                        target="_blank"
                                        className="bg-gray-800 hover:bg-black px-4 py-1 rounded-md text-white text-sm"
                                    >
                                        Frontend
                                    </a>
                                )}

                                {project.backend && (
                                    <a
                                        href={project.backend}
                                        target="_blank"
                                        className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded-md text-white text-sm"
                                    >
                                        Backend
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project