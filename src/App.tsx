import { useTheme } from "./hooks/useTheme";
import { UserSearch } from "./components/UserSearch";
import moonIcon from "./assets/moon.svg";
import sunIcon from "./assets/sun.svg";

export function App() {
  const { theme, setTheme } = useTheme();

  console.log("render App");

  function changeTheme() {
    setTheme((lastTheme) => (lastTheme === "dark" ? "light" : "dark"));
  }

  return (
    <main className="bg-light-background dark:bg-dark-background min-h-screen flex justify-center">
      <div className="max-w-[730px] w-full mt-[144px]">
        <div className="flex justify-between text-light-text dark:text-dark-text">
          <h1 className="text-[26px] font-bold">devFinder</h1>
          <button
            className="flex items-center gap-4 font-bold text-light-soft-600
            dark:text-dark-soft-600 text-[13px] tracking-[2.5px] hover:text-light-soft-h-600
            active:text-light-soft-h-600 dark:active:text-dark-soft-h-600 
            dark:hover:text-dark-soft-h-600"
            onClick={changeTheme}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
            <img src={theme === "dark" ? sunIcon : moonIcon} alt="moon icon" />
          </button>
        </div>
        <UserSearch />
      </div>
    </main>
  );
}
