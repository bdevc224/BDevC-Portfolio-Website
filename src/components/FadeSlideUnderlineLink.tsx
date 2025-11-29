import { Link, useLocation, type To } from "react-router-dom";

interface FadeSlideUnderlineLinkProps {
  to?: To;
  href?: string;
  color?: "white" | "black" | "gray" | "blue" | "red" | "indigo" | "emerald";
  hoverColor?: "white" | "blue-400" | "indigo-500" | "emerald-400";
  activeColor?: "blue-500" | "red-500" | "green-500" | "purple-500" | "yellow-500";
  center?: boolean;
  className?: string;
  showActiveIndicator?: boolean;
  children: React.ReactNode;
}

export default function FadeSlideUnderlineLink({
  to,
  href,
  color = "white",
  hoverColor = "white",
  activeColor = "red-500",
  center = false,
  className = "",
  showActiveIndicator = true,
  children,
}: FadeSlideUnderlineLinkProps) {
  const location = useLocation();
  const path = location.pathname;
  const isActive = path === (to || href);

  // Safe Tailwind color mappings with fallbacks
  const colorMap: Record<string, string> = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-700",
    blue: "text-blue-500",
    red: "text-red-500",
    indigo: "text-indigo-500",
    emerald: "text-emerald-500",
  };

  const hoverMap: Record<string, string> = {
    "white": "hover:text-white after:bg-white",
    "blue-400": "hover:text-blue-400 after:bg-blue-400",
    "indigo-500": "hover:text-indigo-500 after:bg-indigo-500",
    "emerald-400": "hover:text-emerald-400 after:bg-emerald-400",
  };

  const activeColorMap: Record<string, string> = {
    "blue-500": "text-blue-500 after:bg-blue-500",
    "red-500": "text-red-500 after:bg-red-500",
    "green-500": "text-green-500 after:bg-green-500",
    "purple-500": "text-purple-500 after:bg-purple-500",
    "yellow-500": "text-yellow-500 after:bg-yellow-500",
  };

  const textColor = colorMap[color] || "text-white";
  const hoverColorClasses = hoverMap[hoverColor] || "hover:text-white after:bg-white";
  const activeColorClasses = activeColorMap[activeColor] || "text-blue-500 after:bg-blue-500";

  // Base classes for all states
  const baseClasses = `
    relative inline-block font-heading 
    transition-all duration-300 ease-in-out
    after:content-[''] after:absolute 
    ${center ? "after:left-1/2 after:-translate-x-1/2 after:origin-center" : "after:left-0 after:origin-left"} 
    after:bottom-0 after:h-0.5 after:w-full
    after:transition-all after:duration-300 after:ease-in-out
    ${className}
  `;

  // Active state classes
  const activeClasses = `
    ${activeColorClasses}
    after:scale-x-100 after:opacity-100
    font-semibold
    ${showActiveIndicator ? 'scale-105' : ''}
  `;

  // Inactive state classes
  const inactiveClasses = `
    ${textColor} ${hoverColorClasses}
    after:scale-x-0 after:opacity-0 
    hover:after:scale-x-100 hover:after:opacity-100
    hover:scale-105
  `;

  // Render Link component for internal navigation
  if (to) {
    return (
      <Link
        to={to}
        className={`
          ${baseClasses}
          ${isActive ? activeClasses : inactiveClasses}
        `}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
        {isActive && showActiveIndicator && (
          <span className="absolute -top-1 -right-2 w-2 h-2 bg-current rounded-full animate-pulse" />
        )}
      </Link>
    );
  }

  // Render anchor tag for external links
  return (
    <a
      href={href}
      className={`
        ${baseClasses}
        ${isActive ? activeClasses : inactiveClasses}
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && showActiveIndicator && (
        <span className="absolute -top-1 -right-2 w-2 h-2 bg-current rounded-full animate-pulse" />
      )}
    </a>
  );
}