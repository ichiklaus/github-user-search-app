import { useState, useEffect } from "react";

/* Initial theme: dark mode */
const THEME = document.body.classList;

function Header() {
  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    // Initial state is false; if theme is not light and state is false, then add the light theme and set the state to true
    if (!THEME.contains("light-theme") && !theme) {
      THEME.add("light-theme");
      setTheme(true);
    } else {
      THEME.remove("light-theme");
      setTheme(false);
    }
  }

  console.log("🚀 ~ file: Header.jsx ~ line 5 ~ Header ~ theme", theme);

  return (
    <div className="flex flex-row justify-between">
      <div id="title-header">
        <h1 className="main-text--white text-xl font-semibold">devfinder</h1>
      </div>
      <div id="theme-toggler" className="flex justify-center items-center">
        <p className="main-text--white text-xl font-semibold">
          {" "}
          {!theme ? "LIGHT" : "DARK"}{" "}
        </p>
        <i
          className={!theme ? `icon icon-sun` : `icon icon-moon`}
          onClick={toggleTheme}
        ></i>
      </div>
    </div>
  );
}

export default Header;
