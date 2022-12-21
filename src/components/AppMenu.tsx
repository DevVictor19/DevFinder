import { useTheme } from "../hooks/useTheme";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function AppMenu() {
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
            dark:active:text-[#90A4D4] group"
        onClick={changeTheme}
      >
        {theme === "dark" ? "LIGHT" : "DARK"}
        {theme === "dark" ? (
          <SunIcon pathClassName="group-hover:fill-[#90A4D4] group-active:fill-[#90A4D4]" />
        ) : (
          <MoonIcon pathClassName="group-hover:fill-[#222731] group-active:fill-[#222731]" />
        )}
      </button>
    </div>
  );
}
