import {
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type Themes = "dark" | "light";

interface ThemeContextInterface {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
}

interface Props {
  children: ReactNode;
}

const defaultValue = {
  theme: "light" as Themes,
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextInterface>(defaultValue);

export default function ThemeContextProvider({ children }: Props) {
  const lastTheme: Themes =
    localStorage.getItem("theme") === "dark" ? "dark" : "light";

  const [theme, setTheme] = useState<Themes>(lastTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(lastTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
