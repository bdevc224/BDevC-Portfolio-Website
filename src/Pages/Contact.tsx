import { FaLocationPin, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { type IconType } from "react-icons";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href: string | null;
  color: string;
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
            Contact Me
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
            <p className="text-white text-sm mt-2 opacity-80">Get in touch</p>
          </div>
        </FadeInWhenVisible>
      </div>
    </BackgroundImage>
  );
}

function BodySection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "bdevc224@gmail.com",
      href: "mailto:bdevc224@gmail.com",
      color: "hover:text-red-400"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "B_Dev C",
      href: "https://www.linkedin.com/in/b-dev-c-585a34307",
      color: "hover:text-blue-400"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+234 916 622 6690",
      href: "tel:+2349166226690",
      color: "hover:text-green-400"
    },
    {
      icon: FaLocationPin,
      label: "Location",
      value: "Remote Developer - Available Worldwide (Based in Nigeria)",
      href: null,
      color: "hover:text-purple-400"
    }
  ];

  return (
    <div className="bg-linear-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header */}
        <FadeInWhenVisible>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center text-red-500 dark:text-red-400 mb-8 sm:mb-12">
            Get In Touch
          </h1>
        </FadeInWhenVisible>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* Contact Information */}
          <FadeInWhenVisibleRight>
            <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-blue-500 dark:text-blue-400 mb-4 sm:mb-6">
                Let's Talk About Your Project
              </h2>
              
              <p className="font-body text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-600 dark:text-gray-300">
                How do you want your website to look like? What problem do you intend to solve with it? 
                What is your goal? And what is your budget?{" "}
                <span className="text-red-500 dark:text-red-400 font-semibold">Get in touch</span> and let's see how we can make that happen.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-700 ${item.color} transition-colors`}>
                      <item.icon className="text-lg sm:text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === "LinkedIn" ? "_blank" : undefined}
                          rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className={`text-gray-600 dark:text-gray-300 hover:underline transition-all ${item.color} text-sm sm:text-base`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-6 sm:mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <p className="text-blue-700 dark:text-blue-300 text-sm sm:text-base text-center">
                  💫 Typically respond within 2-4 hours during business hours
                </p>
              </div>
            </div>
          </FadeInWhenVisibleRight>

          {/* Contact Form */}
          <FadeInWhenVisibleLeft>
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-800 dark:bg-gray-700 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 sm:mb-8 text-center">
                Send Me a Message
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm sm:text-base font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full px-4 py-3 sm:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-vertical text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg hover:shadow-orange-500/50"
                >
                  SEND MESSAGE
                </button>
              </div>

              {/* Form Note */}
              <p className="text-orange-200 text-xs sm:text-sm text-center mt-4 sm:mt-6">
                * This form doesn't work for now, it's just to show my work. This portfolio is purely frontend, no backend.
              </p>
            </form>
          </FadeInWhenVisibleLeft>
        </div>

        {/* Additional Contact Options */}
        <FadeInWhenVisible>
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 sm:mb-8 text-gray-900 dark:text-white">
              Prefer Another Way to Connect?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/b-dev-c-585a34307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                <FaLinkedin />
                Message on LinkedIn
              </a>
              <a
                href="mailto:bdevc224@gmail.com"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                <FaEnvelope />
                Send an Email
              </a>
              <a
                href="tel:+2349166226690"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                <FaPhone />
                Call Directly
              </a>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      <HeaderSection />
      <BodySection />
      <Footer />
    </div>
  );
}