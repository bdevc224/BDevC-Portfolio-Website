import React, { type ReactNode } from "react";

interface BackgroundVideoProps {
  videoSrc: string;
  overlay?: boolean;
  children?: ReactNode;
  className?: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  overlay = true,
  children,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay */}
      {overlay && <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;
