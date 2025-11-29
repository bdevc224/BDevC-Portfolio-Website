import { Sun, Moon, Laptop } from "lucide-react";
import useDarkMode from "../Hooks/useDarkMode";

export default function DarkModeToggle() {
  const [theme, setTheme] = useDarkMode();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={20} className="text-yellow-500" />;
      case "dark":
        return <Moon size={20} className="text-blue-300" />;
      case "system":
        return <Laptop size={20} className="text-gray-600 dark:text-gray-400" />;
      default:
        return <Sun size={20} />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case "light":
        return "Light mode - Switch to dark";
      case "dark":
        return "Dark mode - Switch to system";
      case "system":
        return "System preference - Switch to light";
      default:
        return "Toggle theme";
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
      aria-label="Toggle theme"
      title={getTooltip()}
    >
      {getIcon()}
    </button>
  );
}