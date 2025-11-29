// src/components/DebugInfo.tsx
import { useEffect, useState } from "react";

export default function DebugInfo() {
  const [htmlClass, setHtmlClass] = useState("");
  const [localStorageTheme, setLocalStorageTheme] = useState("");

  useEffect(() => {
    const updateDebugInfo = () => {
      setHtmlClass(document.documentElement.className);
      setLocalStorageTheme(localStorage.getItem("theme") || "not set");
    };

    updateDebugInfo();
    
    // Update when class changes
    const observer = new MutationObserver(updateDebugInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Update when storage changes
    const handleStorage = () => updateDebugInfo();
    window.addEventListener('storage', handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-black text-white p-3 rounded-lg text-xs max-w-xs">
      <div><strong>HTML Classes:</strong> "{htmlClass}"</div>
      <div><strong>LocalStorage:</strong> "{localStorageTheme}"</div>
      <div><strong>System Pref:</strong> {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}</div>
    </div>
  );
}