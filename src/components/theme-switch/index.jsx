import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
export default function SwitchTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  console.log(theme);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className='switch-theme'
      data-theme={theme}
    >
      <div className='container'>
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
