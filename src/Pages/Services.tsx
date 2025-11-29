import BackgroundVideo from "../components/BackgroundVideo";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Footer from "../components/Footer";

interface Service {
  icon: string;
  title: string;
  description: string;
  color: "red" | "blue" | "yellow";
  features: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

function HeaderSection() {
  return (
    <BackgroundVideo 
      videoSrc="/VIDEOS/my-website.MOV"
      overlay={true}
      type-overlayColor="bg-black/50"
      className="h-screen flex items-center justify-center"
    >
      <div className="text-center px-4 sm:px-6">
        <FadeInWhenVisibleRight>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4 sm:mb-6">
            My Services
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
            <p className="text-white text-sm mt-2 opacity-80">Scroll to explore</p>
          </div>
        </FadeInWhenVisible>
      </div>
    </BackgroundVideo>
  );
}

function BodySection() {
  const services: Service[] = [
    {
      icon: "💻",
      title: "Frontend Web Development",
      description: "Custom websites designed and developed with modern technologies and best practices, explicitly tailored to your needs.",
      color: "red",
      features: ["React.js Development", "Tailwind CSS", "Modern JavaScript", "API Integration"]
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Websites that look unique and function perfectly across all devices, from desktops to mobiles.",
      color: "blue",
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Touch-Friendly UI", "Performance Optimized"]
    },
    {
      icon: "📽️",
      title: "Video Editing",
      description: "Videos carefully and creatively edited to fulfill their purpose with professional quality and engaging content.",
      color: "yellow",
      features: ["Creative Editing", "Professional Quality", "Engaging Content", "Quick Turnaround"]
    }
  ];

  const processSteps: ProcessStep[] = [
    { step: "01", title: "Consultation", desc: "Understand your needs" },
    { step: "02", title: "Design", desc: "Create stunning visuals" },
    { step: "03", title: "Development", desc: "Build with modern tech" },
    { step: "04", title: "Delivery", desc: "Launch & support" }
  ];

  return (
    <div className="bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <FadeInWhenVisible key={service.title}>
              <div className={`
                group relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 
                shadow-xl hover:shadow-2xl transition-all duration-500 
                border border-gray-200 dark:border-gray-700
                hover:translate-y-3 min-h-[400px] sm:min-h-[450px] flex flex-col
                ${service.color === 'red' ? 'hover:shadow-red-500/20' : ''}
                ${service.color === 'blue' ? 'hover:shadow-blue-500/20' : ''}
                ${service.color === 'yellow' ? 'hover:shadow-yellow-500/20' : ''}
              `}>
                
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`
                  text-2xl sm:text-3xl font-heading font-bold text-center mb-4 sm:mb-6
                  ${service.color === 'red' ? 'text-red-600 dark:text-red-400' : ''}
                  ${service.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                  ${service.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' : ''}
                `}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-center mb-6 sm:mb-8 grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm sm:text-base"
                    >
                      <div className={`
                        w-2 h-2 rounded-full shrink-0
                        ${service.color === 'red' ? 'bg-red-500' : ''}
                        ${service.color === 'blue' ? 'bg-blue-500' : ''}
                        ${service.color === 'yellow' ? 'bg-yellow-500' : ''}
                      `} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Border Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 pointer-events-none
                  ${service.color === 'red' ? 'border-red-500' : ''}
                  ${service.color === 'blue' ? 'border-blue-500' : ''}
                  ${service.color === 'yellow' ? 'border-yellow-500' : ''}
                `} />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Call to Action Section */}
        <FadeInWhenVisible>
          <div className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="bg-linear-to-r from-red-500 to-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 sm:mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's work together to bring your ideas to life with stunning design and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/hireme"
                  className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Process Section */}
        <FadeInWhenVisible>
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
              My Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      <HeaderSection />
      <BodySection />
      <Footer />
    </div>
  );
}