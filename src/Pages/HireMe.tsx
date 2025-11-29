import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaCode, FaPalette, FaRocket } from "react-icons/fa";
import { type IconType } from "react-icons";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import LazyResumePDF from "../components/LazyResumePDF"; // Updated import

interface Stat {
  number: string;
  label: string;
}

interface Service {
  icon: IconType;
  title: string;
  desc: string;
  features: string[];
}

interface ContactInfo {
  Icon: IconType;
  text: string;
  href: string;
}

function HeroSection() {
  const stats: Stat[] = [
    { number: "10+", label: "Projects" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
    { number: "Fast", label: "Delivery" }
  ];

  return (
    <div className="bg-linear-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <FadeInWhenVisible>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6">
              Let's Work Together <span className="text-blue-500">🚀</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I'm a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer</span>  
              who loves building beautiful, fast, and accessible web experiences. 
              If you're looking for someone to bring your ideas to life — I'm your person.
            </p>

            {/* Updated PDF Download Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex flex-col sm:flex-row items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 cursor-pointer"
            >
              
              <LazyResumePDF />
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

function ServiceSection() {
  const services: Service[] = [
    {
      icon: FaCode,
      title: "Web Development",
      desc: "Responsive websites built with React, Tailwind, and modern design principles.",
      features: ["React.js", "Tailwind CSS", "Modern JavaScript"]
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      desc: "User-centered design that's visually appealing and easy to use.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: FaRocket,
      title: "Website Optimization",
      desc: "Speed, SEO, and performance optimization for better user experience.",
      features: ["Performance", "SEO Optimization", "Accessibility", "Best Practices"]
    },
  ];

  return (
    <div className="bg-linear-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <FadeInWhenVisible>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-12 sm:mb-16 text-gray-900 dark:text-white">
            What I Offer
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <FadeInWhenVisible key={i}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-4 sm:mb-6">
                  <service.icon className="text-3xl sm:text-4xl" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const contactInfo: ContactInfo[] = [
    { Icon: FaEnvelope, text: "bdevc224@gmail.com", href: "mailto:bdevc224@gmail.com" },
    { Icon: FaLinkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/b-dev-c-585a34307" },
    { Icon: FaGithub, text: "GitHub Profile", href: "https://github.com/bdevc224" },
    { Icon: FaPhone, text: "+234 916 622 6690", href: "tel:+2349166226690" }
  ];

  return (
    <div className="bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Contact Form */}
          <FadeInWhenVisibleLeft>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold mb-6 sm:mb-8 text-center text-blue-600 dark:text-blue-400">
                Send Me a Message 💬
              </h2>
              
              <form
                action="https://formspree.io/f/mwkzjxyz"
                method="POST"
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-vertical text-sm sm:text-base"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 text-sm sm:text-base"
                >
                  Send Message
                </motion.button>
              </form>

              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center mt-4 sm:mt-6">
                * This form doesn't work for now, it's just to show my work. This portfolio is purely frontend, no backend.
              </p>
            </div>
          </FadeInWhenVisibleLeft>

          {/* Contact Information */}
          <FadeInWhenVisibleRight>
            <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 sm:mb-8 text-center">
                Let's Connect
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    target={contact.Icon === FaLinkedin || contact.Icon === FaGithub ? "_blank" : undefined}
                    rel={contact.Icon === FaLinkedin || contact.Icon === FaGithub ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <contact.Icon className="text-lg sm:text-xl shrink-0" />
                    <span className="text-sm sm:text-base group-hover:underline">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              <div className="text-center">
                <p className="text-blue-100 text-sm sm:text-base mb-4">
                  💫 Available for freelance projects and full-time opportunities
                </p>
                <p className="text-blue-200 text-xs sm:text-sm">
                  Remote work • Worldwide collaboration • Quick response time
                </p>
                <p className="text-blue-200 text-xs sm:text-sm">
                  For Payments: Paypal, Grey (For US-based clients via ACH-fee-0.8% ), and Binance
                </p>
              </div>
            </div>
          </FadeInWhenVisibleRight>
        </div>
      </div>
    </div>
  );
}

export default function HireMe() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServiceSection />
      <ContactForm />
      <Footer />
    </div>
  );
}