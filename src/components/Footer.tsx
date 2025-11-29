import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Mail, Github, Phone, ExternalLink, type LucideIcon } from "lucide-react";

interface ContactLink {
  icon: LucideIcon;
  label: string;
  href: string;
  text: string;
}

interface QuickLink {
  name: string;
  href: string;
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' as ScrollBehavior
    });
  };

  const contactLinks: ContactLink[] = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:bdevc224@gmail.com",
      text: "bdevc224@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bdevc224",
      text: "github.com/bdevc224"
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+2349166226690",
      text: "+234 916 622 6690"
    }
  ];

  const quickLinks: QuickLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/myprojects" },
    { name: "Contact", href: "/contact" },
    { name: "Hire Me", href: "/hireme" }
  ];

  const technologies: string[] = ['React', 'Tailwind', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Git'];

  return (
    <footer className="relative w-full bg-white text-black dark:bg-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-blue-600 dark:text-blue-400">
              BDev.C Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Creating beautiful, responsive web experiences with modern technologies. 
              Let's build something amazing together!
            </p>
            
            {/* Contact Links */}
            <div className="space-y-3">
              {contactLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group text-sm sm:text-base"
                >
                  <item.icon size={isMobile ? 16 : 18} className="shrink-0" />
                  <span className="group-hover:underline">{item.text}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base hover:underline"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Skills & Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-gray-200 dark:border-gray-800 py-4 sm:py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} BDev.C. All Rights Reserved
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              Built using React & Tailwind CSS
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ChevronUp size={isMobile ? 20 : 24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}