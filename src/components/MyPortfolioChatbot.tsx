import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, X, ExternalLink, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  name: string;
  img: string;
  description: string;
  link: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  type?: "text" | "projects";
}

interface QuickReply {
  label: string;
  text: string;
}

interface MyPortfolioChatbotProps {
  onClose: () => void;
}

const MyPortfolioChatbot: React.FC<MyPortfolioChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hi, I'm BDev.C's portfolio assistant! I can tell you about his skills, projects, and how he builds websites. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      name: "Real Estate Landing Page",
      img: "/projects/landing.png",
      description:
        "A set of clean and creative real estate landing page made with React-Tailwind for startups and SaaS.",
      link: "https://my-react-tailwind-landing-page.netlify.app/",
    },
    {
      id: 2,
      name: "Love Triangle",
      img: "/projects/portfolio.png",
      description:
        "A responsive love calculator built with React and Tailwind showcasing frontend skills and animations.",
      link: "/lovetriangle",
    },
    {
      id: 3,
      name: "Truth or Dare",
      img: "/projects/ecommerce.png",
      description:
        "A full truth or dare customizable gaming site built with React and Tailwind CSS.",
      link: "/truthordareapp",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "end"
    });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    const userMsg: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      let reply = "";
      let replyType: "text" | "projects" = "text";

      const lowerContent = content.toLowerCase();

      if (lowerContent.includes("project")) {
        reply = "Here are some of my featured projects 👇";
        replyType = "projects";
      } else if (lowerContent.includes("skill")) {
        reply =
          "🧠 I'm skilled in React.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3, Git/GitHub, and ChatGPT API integration. Also experienced in responsive design and mobile-first development.";
      } else if (lowerContent.includes("contact")) {
        reply =
          "📬 You can reach BDev.C via:\n• Email: bdevc224@gmail.com\n• GitHub: github.com/bdevc224\n• Mobile: +2349166226690";
      } else if (lowerContent.includes("about")) {
        reply =
          "👨‍💻 BDev.C is a passionate frontend developer specializing in creating modern, responsive web experiences using React and Tailwind CSS. Focused on clean code and user-friendly designs.";
      } else if (lowerContent.includes("hire")) {
        reply =
          "💼 Available for freelance projects! I build responsive websites, landing pages, and web applications. Let's discuss your project requirements!";
      } else {
        reply =
          "🤖 I'm here to help! Try asking about:\n• Projects\n• Skills\n• Contact info\n• Hiring\n• Experience";
      }

      if (replyType === "projects") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: reply, type: "text" },
          { role: "assistant", content: "projects", type: "projects" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: reply, type: "text" },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Oops! Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const quickReplies: QuickReply[] = [
    { label: "💼 Projects", text: "Show me your projects" },
    { label: "🧠 Skills", text: "What are your skills?" },
    { label: "📬 Contact", text: "How can I contact you?" },
    { label: "👤 About", text: "Tell me about yourself" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm p-2 md:p-4"
        onClick={onClose}
      >
        <motion.div
          type-variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-3xl h-[90vh] md:h-[80vh] flex flex-col bg-white dark:bg-gray-900 
          rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - Mobile Optimized */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-blue-600 text-white">
            <div className="flex items-center gap-2 md:gap-3">
              <Bot className="w-5 h-5 md:w-6 md:h-6" />
              <div>
                <h2 className="font-semibold text-sm md:text-lg leading-tight">
                  {isMobile ? "BDev.C Assistant" : "BDev.C Portfolio Assistant"}
                </h2>
                <p className="text-blue-100 text-xs md:text-sm">
                  {isMobile ? "Online" : "Ask me anything!"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-1 md:p-2 rounded-lg transition active:scale-95"
              aria-label="Close chat"
            >
              <X size={isMobile ? 18 : 20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-3 md:space-y-4 bg-gray-50 dark:bg-gray-800">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => {
                if (msg.type === "projects") {
                  return (
                    <motion.div
                      key={i}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid gap-3 md:gap-4"
                    >
                      {projects.map((p) => (
                        <motion.div
                          key={p.id}
                          whileHover={{ scale: 1.02 }}
                          className="flex flex-col sm:flex-row gap-3 p-3 md:p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600"
                        >
                          <img
                            src={p.img}
                            alt={p.name}
                            className="w-full sm:w-28 md:w-32 h-20 md:h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div className="flex-1">
                              <h3 className="font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base mb-1">
                                {p.name}
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                                {p.description}
                              </p>
                            </div>
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs md:text-sm mt-2 md:mt-3 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                            >
                              <ExternalLink size={isMobile ? 12 : 14} />
                              View Project
                              <ChevronRight size={isMobile ? 12 : 14} />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={i}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-3 md:p-4 rounded-2xl max-w-[85%] md:max-w-[80%] text-sm md:text-base ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-br-md"
                          : "bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-bl-md shadow-sm border border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      {msg.content.split('\n').map((line, index) => (
                        <p key={index} className={index > 0 ? 'mt-2' : ''}>
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Loading Indicator */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-md p-4 shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm">BDev.C is typing...</span>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies - Mobile Optimized */}
          <div className="flex flex-wrap gap-2 p-3 md:p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            {quickReplies.map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => sendMessage(btn.text)}
                className="px-3 py-2 text-xs md:text-sm rounded-full bg-white hover:bg-blue-600 hover:text-white transition-all dark:bg-gray-700 dark:hover:bg-blue-500 shadow-sm border border-gray-200 dark:border-gray-600 font-medium"
              >
                {btn.label}
              </motion.button>
            ))}
          </div>

          {/* Input Area - Mobile Optimized */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 p-3 md:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 md:p-4 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base border border-transparent focus:border-blue-500 transition"
            />
            <motion.button
              type="submit"
              disabled={loading || !input.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white p-3 md:p-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-11 min-h-11"
              aria-label="Send message"
            >
              <Send size={isMobile ? 18 : 20} />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MyPortfolioChatbot;