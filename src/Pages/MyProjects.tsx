import BackgroundVideo from "../components/BackgroundVideo";
import ZoomPortal from "../components/ZoomPortal";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import Footer from "../components/Footer";
import { ExternalLink, Github, Play } from "lucide-react";

// Define the type based on what ZoomPortal expects
type ProjectType = "image" | "video" | "text";

interface Project {
    title: string;
    description: string;
    type: ProjectType;
    src: string;
    link: string;
    tech: string[];
    color: string;
    shadow: string;
    textColor: string;
    featured: boolean;
}

function HeaderSection() {
    return (
        <BackgroundVideo 
            videoSrc="/VIDEOS/p-bdevc.MOV"
            overlay={true}
            type-overlayColor="bg-black/50"
            className="h-screen flex items-center justify-center"
        >
            <div className="text-center px-4 sm:px-6">
                <FadeInWhenVisibleRight>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4 sm:mb-6">
                        My Projects
                    </h1>
                </FadeInWhenVisibleRight>

                <FadeInWhenVisibleLeft>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white opacity-90">
                        BDev.C
                    </h1>
                </FadeInWhenVisibleLeft>
                
                {/* Scroll indicator */}
                <FadeInWhenVisible>
                    <div className="mt-12 sm:mt-16 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto">
                            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                        </div>
                        <p className="text-white text-sm mt-2 opacity-80">Explore my work</p>
                    </div>
                </FadeInWhenVisible>
            </div>
        </BackgroundVideo>
    );
}

function BodySection() {
    const projects: Project[] = [
        {
            title: "Real Estate Landing Page",
            description: "A modern-unique landing page for a Real Estate Company built with React JS and Tailwind CSS. Showcasing how simple but unique and creatively crafted websites can aid in gaining more customers/clients.",
            type: "video",
            src: "/VIDEOS/my-website.MOV",
            link: "https://my-react-tailwind-landing-page.netlify.app/",
            tech: ["React", "Tailwind CSS", "Responsive Design"],
            color: "orange",
            shadow: "shadow-orange-400",
            textColor: "text-orange-400",
            featured: true
        },
        {
            title: "Car Dealer's Portfolio",
            description: "A car dealer's portfolio website built for a business in Abuja, Nigeria. Features direct contact integration and comprehensive service showcasing.",
            type: "image",
            src: "/IMAGES/Delaw-Car-Autos-Portfolio-1.png",
            link: "https://delaw-car-autos.netlify.app/",
            tech: ["React", "Tailwind CSS", "Contact Integration"],
            color: "red",
            shadow: "shadow-red-500",
            textColor: "text-red-500",
            featured: true
        },
        {
            title: "My Diary Website",
            description: "A personal diary application for storing and organizing thoughts, memories, and daily entries with a clean, intuitive interface.",
            type: "text", // Using text type for internal projects
            src: "",
            link: "/mydiaryapp",
            tech: ["React", "Local Storage", "CRUD Operations"],
            color: "cyan",
            shadow: "shadow-cyan-300",
            textColor: "text-cyan-300",
            featured: false
        },
        {
            title: "Multi-player Truth or Dare Game",
            description: "An interactive multiplayer game with customizable options and real-time gameplay features for friends and family.",
            type: "text", // Using text type for internal projects
            src: "",
            link: "/truthordareapp",
            tech: ["React", "Game Logic", "Multiplayer"],
            color: "cyan",
            shadow: "shadow-cyan-300",
            textColor: "text-cyan-300",
            featured: false
        },
        {
            title: "Love Triangle Calculator",
            description: "A fun and engaging love compatibility calculator with beautiful animations and interactive elements.",
            type: "text", // Using text type for internal projects
            src: "",
            link: "/lovetriangle",
            tech: ["React", "Animations", "Interactive UI"],
            color: "pink",
            shadow: "shadow-pink-400",
            textColor: "text-pink-400",
            featured: false
        }
    ];

    return (
        <div className="bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                
                {/* Featured Projects */}
                <FadeInWhenVisible>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12 sm:mb-16 text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
                    {projects.filter(project => project.featured).map((project) => (
                        <FadeInWhenVisible key={project.title}>
                            <div className={`bg-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden ${project.shadow} hover:shadow-lg transition-all duration-300 hover:translate-y-2`}>
                                {/* Project Media */}
                                <div className="relative group">
                                    <ZoomPortal
                                        type={project.type}
                                        src={project.type === "text" ? "" : project.src}
                                        text={project.type === "text" ? project.title : undefined}
                                        bgColor={project.type === "text" ? "#1e40af" : undefined} // Blue background for text portals
                                        textColor={project.type === "text" ? "#ffffff" : undefined}
                                        link={project.link}
                                        
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex gap-4">
                                            <a
                                                href={project.link}
                                                target={project.link.startsWith('http') ? '_blank' : undefined}
                                                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all transform hover:scale-110"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                            {project.type === 'video' && (
                                                <button className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all transform hover:scale-110">
                                                    <Play size={20} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 sm:p-8">
                                    <h3 className={`text-2xl sm:text-3xl font-heading font-bold mb-4 ${project.textColor}`}>
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            target={project.link.startsWith('http') ? '_blank' : undefined}
                                            rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-2 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold text-sm sm:text-base"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <button className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-all text-sm sm:text-base">
                                            <Github size={16} />
                                            Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* Other Projects */}
                <FadeInWhenVisible>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
                        Other Projects
                    </h2>

                    <p className=" text-lg mb-6 max-w-2xl mx-auto">
                        Future projects will appear here.
                    </p>
                </FadeInWhenVisible>

                

                {/* Call to Action */}
                <FadeInWhenVisible>
                    <div className="text-center mt-16 sm:mt-20">
                        <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
                            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                                Like What You See?
                            </h3>
                            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                                Let's work together to bring your next project to life with the same level of quality and attention to detail.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/hireme"
                                    className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl"
                                >
                                    Hire Me
                                </a>
                                <a
                                    href="/contact"
                                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all text-sm sm:text-base"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </div>
    );
}

export default function MyProjects() {
    return (
        <div className="overflow-x-hidden">
            <HeaderSection />
            <BodySection />
            <Footer />
    </div>
    );
}