import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { type IconType } from "react-icons";

import DirectionAwareLink from "../components/DirectionAwareLink";
import BackgroundMedia from "../components/BackgroundMedia";
import RandomQuote from "../components/RandomQuote";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import Footer from "../components/Footer";

interface SocialLink {
  Icon: IconType;
  href: string;
  label: string;
  color: string;
}

function Hero() {
  const socialLinks: SocialLink[] = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/b-dev-c-585a34307", label: "LinkedIn", color: "hover:text-blue-400" },
    { Icon: FaFacebook, href: "https://www.facebook.com/share/17jd4r6yd1/?mibextid=wwXIfr", label: "Facebook", color: "hover:text-blue-400" },
    { Icon: FaInstagram, href: "https://www.instagram.com/b_dev.c?igsh=ZXQ1azZrNWU2Nzls", label: "Instagram", color: "hover:text-orange-400" },
    { Icon: FaXTwitter, href: "https://x.com/b_devc26?s=21", label: "XTwitter", color: "hover:text-blue-400" },
    { Icon: FaGithub, href: "https://github.com/bdevc224", label: "Github", color: "hover:text-blue-400" },
    { Icon: FaPhone, href: "tel:+2349166226690", label: "Mobile Phone", color: "hover:text-green-400" }
  ];

  return (
    <BackgroundMedia
      type="auto"
      src="/VIDEOS/B.DEVCLOGO.MOV"
      mobileSrc="/IMAGES/BDEVCLOGO4.JPEG"
      overlayType="gradient"
      gradient="from-black/80 via-black/50 to-transparent"
      fadeDuration={1.4}
      className="h-screen w-screen flex items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="text-white p-4 sm:p-6 lg:p-8 font-heading w-full max-w-7xl mx-auto">
        <FadeInWhenVisibleLeft>
          <p className="text-start text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6">
            <span className="bg-blue-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base">
              {new Date().getFullYear()}
            </span> 
            <span className="ml-2 sm:ml-3">Hello, I'm</span>
          </p>
        </FadeInWhenVisibleLeft>

        <FadeInWhenVisibleLeft>
          <h1 className="text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            BDev.C
          </h1>
         
          <p className="text-start my-3 sm:my-4 text-lg sm:text-xl md:text-2xl opacity-90 font-bold">
            And I'm a <span className="text-red-500">front-end web developer</span> 
          </p>
          
          <p className="text-start pb-3 sm:pb-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            Hi 👋 I'm BDev.c a front-end web designer and developer. 
            I specialize in curating <span className="text-pink-500 font-bold">unique</span> UI/UX tailored to your specific needs. 
            I work with HTML, CSS, JavaScript, React JS, Tailwind CSS and TypeScript.
          </p>
        </FadeInWhenVisibleLeft>

        <FadeInWhenVisibleLeft>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-2xl sm:text-3xl my-4 sm:my-6">
            {socialLinks.map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 ${color}`}
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </FadeInWhenVisibleLeft>

        <FadeInWhenVisibleLeft>
          <div className="text-start flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12">
            <DirectionAwareLink 
              to="/hireme" 
              className="font-body font-bold border-2 border-red-500 text-base sm:text-lg text-red-500 px-4 sm:px-6 py-3 sm:py-4 w-2xs sm:w-56 text-center rounded-lg shadow-lg shadow-red-500/50 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Hire Me
            </DirectionAwareLink>

            <DirectionAwareLink 
              to="/myprojects" 
              className="font-body font-bold border-2 border-red-500 text-base sm:text-lg text-red-500 px-4 sm:px-6 py-3 sm:py-4 w-2xs sm:w-56 text-center rounded-lg shadow-lg shadow-red-500/50 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              My Projects
            </DirectionAwareLink>
          </div>
        </FadeInWhenVisibleLeft>
      </div>
    </BackgroundMedia>
  );
}

function BodySection() {
  return (
    <div className="bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Quotes Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <FadeInWhenVisible>
          <div className="max-w-7xl mx-auto">
            <RandomQuote 
              bgColor="bg-white dark:bg-gray-800/80 backdrop-blur-sm"
              textColor="text-gray-800 dark:text-white"
              showShareButton={true}
              autoRotate={true}
            />
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* Section 1 */}
        <FadeInWhenVisible>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img 
                  src="/IMAGES/mywebsite5.PNG" 
                  alt="" 
                  className="w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-shadow duration-300"
                />
                
            </div>
            <div className="w-full lg:w-1/2">
              <FadeInWhenVisibleLeft>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-loose text-center lg:text-left">
                  The more unique your website is, the more clients are likely to patronize your business. 
                  Let me make that happen for you. Click on the hire me button or visit my contact page. 
                  You can also reach me directly through my mobile number displayed above.
                </p>
              </FadeInWhenVisibleLeft>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Section 2 */}
        <FadeInWhenVisible>
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <FadeInWhenVisibleLeft>
                <img 
                  src="/IMAGES/creativity.PNG" 
                  alt="" 
                  className="w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-shadow duration-300"
                />
              </FadeInWhenVisibleLeft>
            </div>
            <div className="my-10 w-full lg:w-1/2">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed sm:leading-loose text-center lg:text-left">
                A cleanly crafted website speaks more volumes to customers than the products you sell or the services you render. 
                Let me make that happen for you.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Section 3 */}
        <FadeInWhenVisible>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img 
                  src="/IMAGES/REACT3.PNG" 
                  alt="" 
                  className="w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-shadow duration-300"
                />
            </div>
            <div className="w-full my-10 lg:w-1/2">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose text-center lg:text-left space-y-4">
                <span className="block">
                  I'm continuously building this portfolio because it serves as both a storage space and showcase for my work. 
                  There's always more to create, and this is where I'll display it all.
                </span>
                <span className="block">
                  My goal is for clients and visitors to clearly understand my capabilities and build trust in my work. 
                  I've customized my chatbot to answer questions about me and my services.
                </span>
                <span className="block text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Note: This is a structured interactive chatbot focused on answering questions about me and my work, 
                  unlike general AI assistants like ChatGPT or Gemini.
                </span>
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <BodySection />
      <Footer />
    </div>
  );
}