import { useTheme } from "./hooks/useTheme";

import moonIcon from "./assets/moon.svg";
import sunIcon from "./assets/sun.svg";

export function App() {
  const { theme, setTheme } = useTheme();

  console.log("render");

  function changeTheme() {
    setTheme((lastTheme) => (lastTheme === "dark" ? "light" : "dark"));
  }

  return (
    <main className="bg-light-background dark:bg-dark-background min-h-screen flex justify-center ">
      <div className="max-w-[730px] w-full mt-[144px]">
        <div className="flex justify-between text-light-text dark:text-dark-text">
          <h1 className="text-[26px] font-bold">devFinder</h1>
          <button
            className="flex items-center gap-4 font-bold text-[13px] tracking-[2.5px]"
            onClick={changeTheme}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
            <img src={theme === "dark" ? sunIcon : moonIcon} alt="moon icon" />
          </button>
        </div>
      </div>
    </main>
  );
}
