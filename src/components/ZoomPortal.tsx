// src/components/ZoomPortal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

type ZoomPortalType = "image" | "video" | "text";

interface ZoomPortalProps {
  link: string;
  type?: ZoomPortalType;
  src?: string;
  text?: string;
  bgColor?: string;
  textColor?: string;
  duration?: number;
}

const ZoomPortal: React.FC<ZoomPortalProps> = ({
  link,
  type = "image",
  src = "",
  text = "Enter",
  bgColor = "#1e1e1e",
  textColor = "#ffffff",
  duration = 1,
}) => {
  const [zooming, setZooming] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setZooming(true);
    setTimeout(() => {
      if (link.startsWith("http")) {
        window.location.href = link;
      } else {
        navigate(link);
      }
    }, duration * 1000);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <div
        onClick={handleClick}
        className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group w-full aspect-square"
      >
        {/* Display types */}
        {type === "image" && (
          <img
            src={src}
            alt="Zoom Portal"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {type === "video" && (
          <video
            src={src}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {type === "text" && (
          <div
            className="w-full h-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-semibold transition-transform duration-700 group-hover:scale-110 text-center p-2"
            style={{
              backgroundColor: bgColor,
              color: textColor,
            }}
          >
            {text}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center text-white font-semibold text-sm sm:text-base md:text-lg text-center">
          Click to Enter
        </div>

        {/* Click zoom animation */}
        <AnimatePresence>
          {zooming && (
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: 15,
                opacity: 0.8,
                transition: { duration, ease: "easeInOut" },
              }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50"
              style={{ background: bgColor }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ZoomPortal;
