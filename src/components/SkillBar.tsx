import React from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  label?: React.ReactNode;
  percentage?: number;
  color?: string;
  position?: "left" | "right";
}

const SkillBar: React.FC<SkillBarProps> = ({
  label,
  percentage = 0,
  color = "blue-500",
  position = "left",
}) => {
  // Safe color mapping to avoid Tailwind class purging issues
  const colorMap: Record<string, string> = {
    "blue-500": "bg-blue-500",
    "blue-600": "bg-blue-600",
    "green-500": "bg-green-500",
    "green-600": "bg-green-600",
    "red-500": "bg-red-500",
    "red-600": "bg-red-600",
    "yellow-500": "bg-yellow-500",
    "yellow-600": "bg-yellow-600",
    "purple-500": "bg-purple-500",
    "purple-600": "bg-purple-600",
    "indigo-500": "bg-indigo-500",
    "indigo-600": "bg-indigo-600",
    "pink-500": "bg-pink-500",
    "pink-600": "bg-pink-600",
    "gray-500": "bg-gray-500",
    "gray-600": "bg-gray-600",
  };

  const bgColor = colorMap[color] || "bg-blue-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl flex flex-col gap-2"
    >
      {/* Label (any content) */}
      {label && (
        <div
          className={`flex items-center gap-3 ${
            position === "right" ? "justify-between flex-row-reverse" : ""
          }`}
        >
          <div className="flex items-center justify-center min-w-[60px]">
            {label}
          </div>
          {/* Progress Bar */}
          <div className="flex-1">
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner dark:bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className={`h-full ${bgColor} rounded-full shadow-md`}
              ></motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Percentage (optional, below) */}
      <div className="flex justify-end text-sm text-gray-600 dark:text-gray-400 font-medium">
        {percentage}%
      </div>
    </motion.div>
  );
};

export default SkillBar;