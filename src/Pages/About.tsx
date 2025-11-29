import BackgroundImage from "../components/BackgroundImage";
import SkillBar from "../components/SkillBar";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import Footer from "../components/Footer";

interface TechSkill {
  src: string;
  alt: string;
  percentage: number;
}

interface OtherSkill {
  label: string;
  percentage: number;
}

interface Hobby {
  label: string;
  percentage: number;
}

function HeaderSection() {
  return (
    <BackgroundImage
      image="/IMAGES/BDEVCLOGO4.JPEG"
      className="h-screen flex items-center justify-center"
    >
      <div className="text-center px-4 sm:px-6">
        <FadeInWhenVisibleRight>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4 sm:mb-6">
            About Me
          </h1>
        </FadeInWhenVisibleRight>

        <FadeInWhenVisibleLeft>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-body text-white opacity-90">
            BDev.C
          </h1>
        </FadeInWhenVisibleLeft>
        
        {/* Scroll indicator for mobile */}
        <FadeInWhenVisible>
          <div className="mt-12 sm:mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </BackgroundImage>
  );
}

function BodySection() {
  const techSkills: TechSkill[] = [
    { src: "/IMAGES/HTML.JPG", alt: "HTML", percentage: 90 },
    { src: "/IMAGES/CSS6.PNG", alt: "CSS LOGO", percentage: 85 },
    { src: "/IMAGES/JS6.PNG", alt: "JavaScript", percentage: 80 },
    { src: "/IMAGES/REACT3.PNG", alt: "React", percentage: 85 },
    { src: "/IMAGES/TAILWINDCSS4.PNG", alt: "TAILWINDCSS", percentage: 90 },
    { src: "/IMAGES/ChatGPT.PNG", alt: "ChatGPT", percentage: 90 },
    { src: "/IMAGES/git-github.JPG", alt: "git-github", percentage: 85 },
  ];

  const otherSkills: OtherSkill[] = [
    { label: "Communication", percentage: 80 },
    { label: "Problem Solving", percentage: 80 },
    { label: "Innovation", percentage: 80 },
    { label: "Creativity", percentage: 80 },
    { label: "Video Editing", percentage: 80 },
  ];

  const hobbies: Hobby[] = [
    { label: "Soccer ⚽", percentage: 98 },
    { label: "Basketball 🏀", percentage: 70 },
    { label: "Video Games 🎮", percentage: 95 },
    { label: "Working on projects with my laptop 💻", percentage: 95 },
  ];

  return (
    <div className="bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <FadeInWhenVisible>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading py-4 sm:py-6 text-red-500">
              Who am I?
            </h1>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose">
              <p>
                I am a frontend web developer and video editor from Nigeria. I build unique web experiences 
                using technologies like HTML, CSS, JavaScript, and frameworks like React JS & Tailwind CSS.
              </p>
              
              <p>
                I help businesses and individuals grow in their industry by designing fast, responsive, and 
                enchanting UI/UX landing pages and portfolios. This bridges the communication gap between 
                them and their potential customers/clients.
              </p>
              
              <p>
                With my creativity and tech stack expertise, I implement animations, transition effects, 
                language toggles, and other integrations to give websites an elite look based on client 
                preferences. Most importantly, I provide a peaceful and awesome user experience.
              </p>
              
              <p className="font-semibold text-red-500 dark:text-red-400">
                My purpose is to express myself through crafting websites that people want and are excited 
                to have - fast, steady, responsive, interactive, fascinating, and uniquely tailored.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <FadeInWhenVisible>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-red-500 py-8 sm:py-12">
              My Skills
            </h1>
          </FadeInWhenVisible>
          
          {/* Tech Skills */}
          <div className="mb-16 sm:mb-20">
            <FadeInWhenVisibleLeft>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-start text-green-500 dark:text-green-400 mb-8 sm:mb-12">
                Tech Skills
              </h4>
            </FadeInWhenVisibleLeft>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {techSkills.map((skill) => (
                <FadeInWhenVisible key={skill.alt}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <SkillBar
                      label={
                        <img 
                          src={skill.src} 
                          alt={skill.alt} 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto"
                        />
                      }
                      percentage={skill.percentage}
                      color="blue-500"
                    />
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="mb-16 sm:mb-20">
            <FadeInWhenVisibleLeft>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-start text-green-500 dark:text-green-400 mb-8 sm:mb-12">
                Other Skills
              </h4>
            </FadeInWhenVisibleLeft>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {otherSkills.map((skill) => (
                <FadeInWhenVisible key={skill.label}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <SkillBar
                      label={<p className="font-semibold text-sm sm:text-base">{skill.label}</p>}
                      percentage={skill.percentage}
                      color="green-500"
                    />
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div>
            <FadeInWhenVisibleLeft>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-red-500 dark:text-red-400 mb-8 sm:mb-12">
                Hobbies
              </h1>
            </FadeInWhenVisibleLeft>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {hobbies.map((hobby) => (
                <FadeInWhenVisible key={hobby.label}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <SkillBar
                      label={<p className="font-semibold text-sm sm:text-base">{hobby.label}</p>}
                      percentage={hobby.percentage}
                      color="green-500"
                    />
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <HeaderSection />
      <BodySection />
      <Footer />
    </div>
  );
}