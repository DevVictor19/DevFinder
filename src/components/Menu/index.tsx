import { Sun, Moon } from "phosphor-react";
import { useTheme } from "../../hooks/useTheme";

export function Menu() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    setTheme((lastTheme) => (lastTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="flex justify-between">
      <h1 className="text-[26px] font-bold text-[#222731] dark:text-white">
        devFinder
      </h1>
      <button
        className="flex items-center gap-4 font-bold text-[#697C9A] 
            hover:text-[#222731] dark:text-white text-[13px] tracking-[2.5px] 
            active:text-[#222731] dark:hover:text-[#90A4D4] 
            dark:active:text-[#90A4D4]"
        onClick={changeTheme}
      >
        {theme === "dark" ? "LIGHT" : "DARK"}
        {theme === "dark" ? (
          <Sun size={20} weight="fill" />
        ) : (
          <Moon size={22} weight="fill" />
        )}
      </button>
    </div>
  );
}
