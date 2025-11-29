import { useState, useEffect, type ReactNode, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load all pages
const Home = lazy(() => import("../Pages/Home"));
const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));
const Services = lazy(() => import("../Pages/Services"));
const MyProjects = lazy(() => import("../Pages/MyProjects"));
const HireMe = lazy(() => import("../Pages/HireMe"));

// Lazy load components (if they're heavy)
const FadeSlideUnderlineLink = lazy(() => import("./FadeSlideUnderlineLink"));
const MyPortfolioChatbot = lazy(() => import("./MyPortfolioChatbot"));
const DarkModeToggle = lazy(() => import("./DarkModeToggle"));

// Loading component for suspense fallback
const PageLoader: React.FC = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Page Transition Wrapper Component
interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

// Mobile Menu Icon Component
interface MobileMenuIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span
        className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
        }`}
      />
    </button>
  );
};

// Non-lazy components (small, critical)
const ChatButton: React.FC<{ onClick: () => void; isMobile?: boolean }> = ({ onClick, isMobile }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 hover:bg-blue-700 transition text-sm rounded-md ${
      isMobile ? 'px-3 py-1' : 'px-4 py-2'
    }`}
  >
    {isMobile ? '💬' : '💬 Chat'}
  </button>
);

export default function Navbar() {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [, setIsMobile] = useState<boolean>(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      {/* Theming container */}
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
        
        {/* NAVBAR */}
        <nav className="font-heading font-semibold bg-gray-800 dark:bg-gray-950 fixed w-full top-0 z-50 text-white py-4 px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo/Brand */}
            <div className="text-lg md:text-xl">
              <h2>BDev.C Portfolio</h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Suspense fallback={<span>Home</span>}>
                <FadeSlideUnderlineLink to="/">Home</FadeSlideUnderlineLink>
              </Suspense>
              <Suspense fallback={<span>About</span>}>
                <FadeSlideUnderlineLink to="/about">About</FadeSlideUnderlineLink>
              </Suspense>
              <Suspense fallback={<span>Services</span>}>
                <FadeSlideUnderlineLink to="/services">Services</FadeSlideUnderlineLink>
              </Suspense>
              <Suspense fallback={<span>Contact</span>}>
                <FadeSlideUnderlineLink to="/contact">Contact</FadeSlideUnderlineLink>
              </Suspense>
              
              <Suspense fallback={<div className="w-10 h-6 bg-gray-600 rounded-full"></div>}>
                <DarkModeToggle />
              </Suspense>
              
              <ChatButton onClick={() => setShowChat(true)} />
            </div>

            {/* Mobile Navigation Header */}
            <div className="flex md:hidden items-center space-x-4">
              <Suspense fallback={<div className="w-8 h-5 bg-gray-600 rounded-full"></div>}>
                <DarkModeToggle />
              </Suspense>
              
              <ChatButton onClick={() => setShowChat(true)} isMobile />
              <MobileMenuIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <motion.div
            className={`md:hidden bg-gray-800 dark:bg-gray-950 absolute top-full left-0 w-full shadow-lg ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              height: isMobileMenuOpen ? 'auto' : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Suspense fallback={<span className="py-2">Home</span>}>
                <FadeSlideUnderlineLink to="/" type-onClick={closeMobileMenu}>
                  Home
                </FadeSlideUnderlineLink>
              </Suspense>
              <Suspense fallback={<span className="py-2">About</span>}>
                <FadeSlideUnderlineLink to="/about" type-onClick={closeMobileMenu}>
                  About
                </FadeSlideUnderlineLink>
              </Suspense>
              <Suspense fallback={<span className="py-2">Services</span>}>
                <FadeSlideUnderlineLink to="/services" type-onClick={closeMobileMenu}>
                  Services
                </FadeSlideUnderlineLink>
              </Suspense>
              <Suspense fallback={<span className="py-2">Contact</span>}>
                <FadeSlideUnderlineLink to="/contact" type-onClick={closeMobileMenu}>
                  Contact
                </FadeSlideUnderlineLink>
              </Suspense>
            </div>
          </motion.div>
        </nav>

        {/* Chatbot Overlay - Lazy loaded when needed */}
        {showChat && (
          <Suspense fallback={
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">Loading chat...</div>
            </div>
          }>
            <MyPortfolioChatbot onClose={() => setShowChat(false)} />
          </Suspense>
        )}

        {/* PAGE ROUTES with Fade Transition and Lazy Loading */}
        <div className="pt-20 md:pt-24 px-4 md:px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/services" element={
              <PageTransition>
                <Services />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
            <Route path="/myprojects" element={
              <PageTransition>
                <MyProjects />
              </PageTransition>
            } />
            <Route path="/hireme" element={
              <PageTransition>
                <HireMe />
              </PageTransition>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}