import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCcw, Quote, Share2 } from "lucide-react";

interface RandomQuoteProps {
  quotes?: string[];
  bgColor?: string;
  textColor?: string;
  showShareButton?: boolean;
  autoRotate?: boolean;
  rotateInterval?: number;
}

export default function RandomQuote({
  quotes = [
    "The world could become a better place if you just smile.",
    "Smile you are becoming that person.",
    "Simplicity is the soul of efficiency.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Make it work, make it right, make it fast.",
    "Debugging opens your mind to the possibilities and diverse skills of solving problems.",
    "My tuppence worth - keep it real, keep it simple, keep it true.",
    "I hope you find what you're looking for.",
    "The function of a man is to live and not to exist.",
    "The one who writes all are equal changes 10 people, but the one who treats others equally, changes a thousand.",
    "If the power to control the rain is given to someone who sells umbrellas, do you think there would ever be a sunny day?",
  ],
  bgColor = "bg-white/10 dark:bg-gray-800/50",
  textColor = "text-gray-800 dark:text-white",
  showShareButton = true,
  autoRotate = false,
  rotateInterval = 10000, // 10 seconds
}: RandomQuoteProps) {
  const [quote, setQuote] = useState<string>(quotes[0]);
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

  // Auto-rotate quotes
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      handleNewQuote();
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, quote, quotes]);

  const handleNewQuote = () => {
    let newQuote: string;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote && quotes.length > 1);
    setQuote(newQuote);
  };

  const handleShare = async () => {
    const shareText = `"${quote}" - BDev.C Portfolio`;
    
    if (navigator.share && isMobile) {
      try {
        await navigator.share({
          title: 'Inspirational Quote',
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to clipboard if share fails
        await handleClipboardFallback(shareText);
      }
    } else {
      await handleClipboardFallback(shareText);
    }
  };

  const handleClipboardFallback = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      
      // Show temporary feedback
      const button = document.querySelector('.share-button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          if (button.textContent === 'Copied!') {
            button.textContent = originalText;
          }
        }, 2000);
      }
    } catch (error) {
      console.log('Clipboard failed:', error);
      // Ultimate fallback - show alert
      alert('Quote copied to clipboard!');
    }
  };

  return (
    <motion.div
      className={`w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 ${bgColor} ${textColor} flex flex-col items-center justify-center gap-4 sm:gap-6`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="text-blue-500"
      >
        <Quote size={isMobile ? 24 : 32} />
      </motion.div>

      {/* Quote Text */}
      <div className="w-full min-h-20 sm:min-h-[100px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={quote}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-center italic text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-loose px-2 sm:px-4"
          >
            "{quote}"
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
        <motion.button
          onClick={handleNewQuote}
          whileHover={{ scale: isMobile ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium text-sm sm:text-base w-full sm:w-auto min-h-11"
          aria-label="Get new quote"
        >
          <RefreshCcw size={isMobile ? 16 : 18} />
          New Quote
        </motion.button>

        {showShareButton && (
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="share-button flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-all duration-300 font-medium text-sm sm:text-base w-full sm:w-auto min-h-11"
            aria-label="Share quote"
          >
            <Share2 size={isMobile ? 16 : 18} />
            Share
          </motion.button>
        )}
      </div>

      {/* Quote Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center mt-2"
      >
        {quotes.length} inspirational quotes
        {autoRotate && " • Auto-rotating"}
      </motion.div>

      {/* Mobile Optimized Touch Area */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none sm:pointer-events-none" />
      )}
    </motion.div>
  );
}