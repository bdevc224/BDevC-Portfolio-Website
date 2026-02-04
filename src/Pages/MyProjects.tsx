import BackgroundVideo from "../components/BackgroundVideo";
import ZoomPortal from "../components/ZoomPortal";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import Footer from "../components/Footer";
import { ExternalLink, Github, Code, Star } from "lucide-react";

// Define the type based on what ZoomPortal expects
type ProjectType = "image" | "video" | "text";

interface Project {
    title: string;
    description: string;
    type: ProjectType;
    src: string;
    link: string;
    github: string; // GitHub repository link
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
                        <p className="text-white text-sm mt-2 opacity-80">Explore my code & projects</p>
                    </div>
                </FadeInWhenVisible>
            </div>
        </BackgroundVideo>
    );
}

function BodySection() {
    // Projects

    const projects: Project[] = [
        {
            title: "Real Estate Landing Page",
            description: "A modern-unique landing page for a Real Estate Company built with React JS and Tailwind CSS. Showcasing how simple but unique and creatively crafted websites can aid in gaining more customers/clients.",
            type: "video",
            src: "/VIDEOS/my-website.MOV",
            link: "https://my-react-tailwind-landing-page.netlify.app/",
            github: "https://github.com/bdevc224/my-react-tailwind-project",
            tech: ["React", "Tailwind CSS", "Responsive Design", "Problem Solving", "Creativity" ],
            color: "orange",
            shadow: "shadow-orange-400",
            textColor: "text-orange-400",
            featured: true
        },
        {
            title: "Delaw Car Autos Portfolio",
            description: "A car dealer's portfolio website built for a business in Abuja, Nigeria. Features direct contact integration and comprehensive service showcasing.",
            type: "image",
            src: "/IMAGES/Delaw-Car-Autos-Portfolio-1.png",
            link: "https://delaw-car-autos.netlify.app/",
            github: "https://github.com/bdevc224/delaw-car-autos-website",
            tech: ["React", "Tailwind CSS", "TypeScript", "Contact Integration", "Responsive Design", "Problem Solving", "Creativity" ],
            color: "red",
            shadow: "shadow-red-500",
            textColor: "text-red-500",
            featured: true
        },
        {
            title: "BC Autos Portfolio",
            description: "A car dealer's portfolio website built for a business in Enugu and Abuja, Nigeria. Features direct contact integration and comprehensive service showcasing.",
            type: "image",
            src: "/IMAGES/bc-autos-website.png",
            link: "https://bc-autos-website.netlify.app/",
            github: "https://github.com/bdevc224/bc-autos-website",
            tech: ["React", "Tailwind CSS", "TypeScript", "Contact Integration", "Responsive Design", "Problem Solving", "Creativity" ],
            color: "blue",
            shadow: "shadow-blue-500",
            textColor: "text-blue-500",
            featured: true
        },
        {
            title: "BC Travel Tour & Vacation",
            description: "This is a personal project based on a company focused on travels, tours, and vacation businesses all over the world.",
            type: "image",
            src: "/IMAGES/bc-ttv.png",
            link: "https://bc-travel-tour-vacation-web.netlify.app/",
            github: "https://github.com/bdevc224/bc-travel-tour-vacation-web",
            tech: ["HTML", "CSS", "JavaScript", "Contact Integration", "Responsive Design", "Problem Solving", "Creativity" ],
            color: "orange",
            shadow: "shadow-orange-300",
            textColor: "text-orange-300",
            featured: true
        },
    ];

    return (
        <div className="bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                
                {/* GitHub Section Header */}
                <FadeInWhenVisible>
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full mb-4">
                            <Github className="w-6 h-6" />
                            <span className="font-semibold">View My Code on GitHub</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Each project includes a link to its source code. Click the <Code className="inline w-5 h-5" /> button to explore!
                        </p>
                    </div>
                </FadeInWhenVisible>

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
                                        bgColor={project.type === "text" ? "#1e40af" : undefined}
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
                                                title="View Live Demo"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all transform hover:scale-110"
                                                title="View Source Code on GitHub"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 sm:p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className={`text-2xl sm:text-3xl font-heading font-bold ${project.textColor}`}>
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            title="Star on GitHub"
                                        >
                                            <Star size={18} className="hover:fill-yellow-400" />
                                        </a>
                                    </div>
                                    
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
                                            className="flex items-center gap-2 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold text-sm sm:text-base flex-1 justify-center"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold text-sm sm:text-base flex-1 justify-center"
                                        >
                                            <Github size={16} />
                                            View Code
                                        </a>
                                    </div>

                                    {/* GitHub Link */}
                                    <div className="mt-4 pt-4 border-t border-gray-800">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                                        >
                                            <Code size={14} />
                                            <span>Browse source code on GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                {/* GitHub Profile CTA */}
                <FadeInWhenVisible>
                    <div className="bg-linear-to-r from-gray-900 to-black rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white mb-12 sm:mb-16">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <div className="flex items-center gap-3 mb-4">
                                    <Github className="w-8 h-8" />
                                    <h3 className="text-2xl font-heading font-bold">More Projects on GitHub</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Explore all my repositories, contributions, and open-source work.
                                </p>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Star className="w-4 h-4" />
                                    <span>Star my repositories to show support!</span>
                                </div>
                            </div>
                            <a
                                href="https://github.com/bdevc224"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl whitespace-nowrap"
                            >
                                Visit My GitHub
                            </a>
                        </div>
                    </div>
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