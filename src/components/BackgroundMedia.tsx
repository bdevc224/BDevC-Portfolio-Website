import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../Hooks/useIsMobile";

interface BackgroundMediaProps {
  type?: "auto" | "image" | "video";
  src: string;
  mobileSrc?: string | null;
  overlay?: boolean;
  overlayType?: "color" | "gradient" | "none";
  overlayColor?: string;
  gradient?: string;
  className?: string;
  fadeDuration?: number;
  children: React.ReactNode;
}

export default function BackgroundMedia({
  type = "auto",
  src,
  mobileSrc = null,
  overlay = true,
  overlayType = "color",
  overlayColor = "bg-black/40",
  gradient = "from-black/60 to-transparent",
  className = "h-screen",
  fadeDuration = 1.2,
  children,
}: BackgroundMediaProps) {
  const isMobile = useIsMobile(768);

  // Determine which media to display
  const actualType = type === "auto"
    ? isMobile
      ? "image"
      : "video"
    : type;

  const actualSrc = isMobile && mobileSrc ? mobileSrc : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {actualType === "video" ? (
          <motion.video
            key="video"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={actualSrc}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          />
        ) : (
          <motion.div
            key="image"
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${actualSrc})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeDuration }}
          />
        )}
      </AnimatePresence>

      {/* Overlay */}
      {overlay && overlayType !== "none" && (
        <motion.div
          key="overlay"
          className={`absolute inset-0 ${
            overlayType === "gradient"
              ? `bg-linear-to-t ${gradient}`
              : overlayColor
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: fadeDuration }}
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        {children}
      </div>
    </div>
  );
}