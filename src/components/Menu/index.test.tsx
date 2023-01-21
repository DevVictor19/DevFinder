import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";

import { Menu } from ".";
import { ThemeContext } from "../../context/themeContext";

type Themes = "dark" | "light";

const renderMenu = (initialTheme: Themes) => {
  return render(
    <ThemeContext.Provider value={{ theme: initialTheme, setTheme: () => {} }}>
      <Menu />
    </ThemeContext.Provider>
  );
};

describe("<Menu />", () => {
  it("should mounts properly", () => {
    const container = renderMenu("dark");

    expect(container).toBeTruthy();
  });

  it("should display a button with 'LIGHT' text and a sun icon when the theme is dark", () => {
    const theme: Themes = "dark";
    const { getByText, getByTestId } = renderMenu(theme);
    const darkButton = getByText("LIGHT");
    const sunIcon = getByTestId("sun");

    expect(darkButton).toBeTruthy();
    expect(sunIcon).toBeTruthy();
  });

  it("should display a button with 'DARK' text and a moon icon when the theme is light", () => {
    const theme: Themes = "light";
    const { getByText, getByTestId } = renderMenu(theme);
    const lightButton = getByText("DARK");
    const moonIcon = getByTestId("moon");

    expect(lightButton).toBeTruthy();
    expect(moonIcon).toBeTruthy();
  });
});
