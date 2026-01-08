import { useEffect, useState } from "react";
import { motion, scale } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaTools, FaProjectDiagram, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiSpringboot, SiFirebase, SiMongodb, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { MdComputer, MdDeveloperMode } from "react-icons/md";
import { DiJava } from "react-icons/di";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SkillsSection from "./skills";
import "../index.css"
import { FiAlignJustify, FiX } from "react-icons/fi";

export const Portfolio = () => {
    const [show, setshow] = useState(false)
    const [isLess, setIsLess] = useState(false)
    const projects = [
        {
            title: "Quizzy - Full Stack Quiz Application",
            image: "/quizzy.png",
            desc: "Developed a full-stack quiz management system using React.js and Spring Boot. Teachers can create quizzes, add questions, generate unique exam links, and evaluate student submissions. Implemented JWT-based authentication, role-based access control, automated result calculation, and teacher-specific data isolation with PostgreSQL. Built a responsive UI using Tailwind CSS and integrated frontend with secure REST APIs.",
            link: "https://quizzy-omega-black.vercel.app/"
        },        
    {
        title: "Resume Builder",
        image: "/Home_resume.jpg",
        desc: "Built a resume builder platform with React.js, allowing users to select templates, dynamically input details, and export resumes as PDFs. Emphasized real-time updates and responsive design.",
        link: "https://resume-maker-five-omega.vercel.app"
    }, {
        title: "Expense Tracker App",
        image: "/expense_trackaer.jpg",
        desc: "Developed a mobile expense tracker using React Native and Firebase. Implemented user authentication, transaction records, and dynamic charts for visual insights. Ensured offline data sync, performance optimization, and responsive UI across devices.",
        link: "https://expo.dev/accounts/skj1/projects/Expense-Tracker/builds/2739472c-ca65-4c85-9333-9d08bb06c5c9"
    }, {
        title: "Signature Website ",
        image: "/sig_app.png",
        desc: "Designed a digital signature tool with smooth rendering and fast interactions using React.js. Allowed users to create, clear, and save signatures as PNG files.",
        link: " https://saurav-kumar-jha.github.io/signature-app/"
    },{
        title: "Learning Management System (LMS)",
        image: "/lms_webpage.png",
        desc: "A frontend-focused Learning Management System that provides free courses for students. Users can search, filter, enroll in courses, watch lessons, manage wishlists, and authenticate securely. Built to support teachers and learners with a modern Udemy-like experience.",
        link: "https://lms-eight-peach.vercel.app/",
    }]
    const visibleProject = isLess ? projects : projects.slice(0,3)
    useEffect(() => {
        document.title = "Saurav Kumar Jha | Full Stack Developer";

        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", "Explore the portfolio of Saurav Kumar Jha, a skilled Full Stack Developer specializing in React.js, Spring Boot, PostgreSQL, and modern web technologies.");
        } else {
            const newMeta = document.createElement("meta");
            newMeta.name = "description";
            newMeta.content = "Explore the portfolio of Saurav Kumar Jha, a skilled Full Stack Developer specializing in React.js, Spring Boot, PostgreSQL, and modern web technologies.";
            document.head.appendChild(newMeta);
        }

        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = "/icon.png";
        document.head.appendChild(link);
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] to-[#121e36] text-white font-[Poppins]">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[#121e36] font-extrabold text-lg">
                <div className="h-full w-[70vw] mx-auto bg-transparent flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-400">Saurav Kumar Jha</h1>
                    <div className="space-x-6 md:block hidden ">
                        <a href="#about" className="hover:text-blue-400 cursor-pointer">About</a>
                        <a href="#skills" className="hover:text-blue-400 cursor-pointer">Skills</a>
                        <a href="#projects" className="hover:text-blue-400 cursor-pointer">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 cursor-pointer">Contact</a>
                    </div>
                </div>
                <div className="flex flex-col items-end md:hidden w-1/2  ">
                    <button className="text-4xl cursor-pointer hover:scale-105  " >{!show ? (<FiAlignJustify onClick={() => setshow(true)} />) : (<FiX onClick={() => setshow(false)} />)}</button>
                    <div className={`w-full flex-col text-center items-center ${show ? "flex" : "hidden"} `}>
                        <a href="#about" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad]">About</a>
                        <a href="#skills" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad] ">Skills</a>
                        <a href="#projects" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad] ">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 cursor-pointer w-full h-auto py-3 px-auto hover:bg-[#121e36ad] ">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-6xl w-[90vw] mx-auto my-12 p-6 sm:p-10 border border-[#1f2c42] rounded-3xl shadow-lg backdrop-blur bg-[#0a0f1c]/50">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">

                    <div className="h-full w-full flex items-center justify-center md:w-[40%] ml-4 " >
                        <motion.img src="/man-profile.avif" alt="Saurav Kumar Jha" className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 cursor-pointer rounded-value border-4 border-[#1f2c42] shadow-[0_2px_50px_4px_rgba(35,44,66,0.8)] hover:shadow-[0_2px_90px_4px_rgba(35,44,66,0.8)] transition-transform duration-500 object-cover animate-glow" initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-[50%] md:flex-1 py-3 px-2">
                        <h1 className="text-2xl sm:text-3xl font-medium text-white">Hi, I'm</h1>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">Saurav Kumar Jha</h2>
                        <p className="text-blue-400 text-xl sm:text-2xl font-semibold">FULL STACK WEB DEVELOPER</p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
                            {[SiHtml5, SiCss3, SiJavascript, SiSpringboot, SiPostgresql, SiTailwindcss].map((Icon, i) => (
                                <div key={i} className="p-3 border-2 border-[#1f2c42] shadow-[0_2px_18px_0px_rgba(35,44,66,0.8)] hover:shadow-[0_2px_22px_4px_rgba(35,44,66,0.8)] bg-[#121e36]/30 rounded-xl cursor-pointer animate-glow transition"
                                >
                                    <Icon className="text-2xl text-blue-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Project Section */}
            <section id="projects" className="px-6 py-10 bg-[#121e36]">
                <h3 className="text-3xl font-semibold text-blue-400 mb-6 flex items-center gap-3"><FaProjectDiagram /> Projects</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6  px-4 py-2 w-4/5 mx-auto ">
                    {visibleProject.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#0a0f1c] border border-[#1f2c42] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 transition duration-300 "
                            whileHover={{ scale: 1.03 }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <a href={project.link} className="text-2xl text-blue-400 font-semibold mb-2">{project.title}</a>
                                <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
                                <div className="text-right">
                                    <a href={project.link} target="_blank" className="text-blue-400 text-xl cursor-pointer hover:scale-110 " >→</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More / View Less Button */}
      {projects.length > 3 && (
        <div className="text-center mt-8 cursor-pointer">
          <button
            onClick={() => setIsLess(!isLess)}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer transition rounded-full text-white font-semibold"
          >
            {isLess ? "View Less" : "View More"}
          </button>
        </div>
      )}
            </section>

            {/* About Section */}
            <section id="about" className="px-6 py-16 bg-[#0a0f1c] flex flex-col md:flex-row items-center gap-12">
                <motion.div className="w-full md:w-[40%] ml-6 drop-shadow-lg " initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} >
                    <DotLottieReact src="/Animation-Computer.lottie" className="w-full h-auto drop-shadow-lg max-w-xs mx-auto md:mx-0 rounded-2xl" loop speed={0.5} autoplay />
                </motion.div>

                <motion.div className="w-full -mt-10 md:w-1/2 text-center md:text-left" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} >
                    <h3 className="text-4xl font-bold text-blue-400 mb-4 -ml-4 ">About Me</h3>
                    <p className="text-xl mb-4 text-gray-300">
                        I'm a passionate <span className="text-blue-300 font-semibold">Full Stack Web Developer</span> with a strong background in building responsive and user-friendly web applications.
                    </p>
                    <p className="text-gray-400 text-base ">
                        I specialize in technologies like <span className="text-blue-300">React.js, Tailwind CSS, Java, SpringBoot</span>, and modern JavaScript. I love turning complex problems into beautiful, intuitive designs.
                    </p>
                </motion.div>
            </section>

            {/* Skills  */}
            <SkillsSection />


            {/* Contact Section */}
            <section id="contact" className="px-6 py-10 bg-[#0a0f1c] text-center">
                <h3 className="text-3xl font-semibold text-blue-400 mb-6">Contact Me</h3>
                <p className="mb-4">Feel free to connect with me on social media or send an email!</p>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://github.com/saurav-kumar-jha" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-blue-400" />
                    </a>
                    <a href="https://linkedin.com/in/saurav-kumar-jha-76a773341" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-400" />
                    </a>
                    <a href="mailto:sauravkrjha614@gmail.com">
                        <FaEnvelope className="hover:text-blue-400" />
                    </a>
                    <a href="https://www.instagram.com/__.saurav__.1/">
                        <FaInstagram className="hover:text-blue-400" />
                    </a>
                </div>
            </section>
        </div>
    );
}
