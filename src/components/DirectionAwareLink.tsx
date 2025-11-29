// src/components/DirectionAwareLink.tsx
import React, { useState, type ReactNode, type MouseEvent } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface DirectionAwareLinkProps extends Omit<LinkProps, "className"> {
  children: ReactNode;
  color?: string; // Tailwind color like "blue-500"
  border?: string; // Tailwind color
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const DirectionAwareLink: React.FC<DirectionAwareLinkProps> = ({
  to = "/",
  children,
  color = "red-500",
  border,
  className = "",
  onClick,
}) => {
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");
  const [exitDirection, setExitDirection] = useState<"top" | "bottom" | "left" | "right">("left");
  const borderColor = border || color;

  const getDirection = (e: MouseEvent<HTMLAnchorElement>) => {
    const { offsetX, offsetY, currentTarget } = e.nativeEvent as any;
    const { offsetWidth, offsetHeight } = currentTarget;

    const topEdge = offsetY;
    const bottomEdge = offsetHeight - offsetY;
    const leftEdge = offsetX;
    const rightEdge = offsetWidth - offsetX;

    const min = Math.min(topEdge, bottomEdge, leftEdge, rightEdge);

    if (min === topEdge) return "top";
    if (min === bottomEdge) return "bottom";
    if (min === leftEdge) return "left";
    return "right";
  };

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => setDirection(getDirection(e));
  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => setExitDirection(getDirection(e));

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden inline-block px-6 py-3 rounded-lg border font-semibold
        transition-all duration-300 group
        border-${borderColor} text-${color}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>

      <span
        className={`
          absolute inset-0 bg-${color}
          transform scale-0 group-hover:scale-100
          transition-transform duration-500 ease-out
          ${direction === "left"
            ? "origin-left"
            : direction === "right"
            ? "origin-right"
            : direction === "top"
            ? "origin-top"
            : "origin-bottom"}
          ${exitDirection === "left"
            ? "group-hover:origin-left"
            : exitDirection === "right"
            ? "group-hover:origin-right"
            : exitDirection === "top"
            ? "group-hover:origin-top"
            : "group-hover:origin-bottom"}
        `}
      ></span>
    </Link>
  );
};

export default DirectionAwareLink;
