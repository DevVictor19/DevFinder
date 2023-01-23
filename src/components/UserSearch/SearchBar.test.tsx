import { it, describe, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { SearchBar } from "./SearchBar";

vi.stubGlobal("alert", () => {});

describe("<SearchBar />", () => {
  it("should render properly", () => {
    const container = render(
      <SearchBar noResults={true} onSearch={() => {}} />
    );

    expect(container).toBeTruthy();
  });

  it("shouldn't call onSearch callback when submitted with invalid values", () => {
    const onSearchHandler = vi.fn();
    const { container } = render(
      <SearchBar noResults={false} onSearch={onSearchHandler} />
    );
    const form = container.querySelector("form")!;
    const input = container.querySelector("input")!;
    const testInput = " ";

    fireEvent.change(input, { target: { value: testInput } });
    fireEvent.submit(form);

    expect(onSearchHandler).not.toBeCalled();
  });

  it("should call onSearch callback with a text without spaces when submitted", () => {
    const onSearchHandler = vi.fn();
    const { container } = render(
      <SearchBar noResults={false} onSearch={onSearchHandler} />
    );
    const form = container.querySelector("form")!;
    const input = container.querySelector("input")!;
    const testInput = " test input ";

    fireEvent.change(input, { target: { value: testInput } });
    fireEvent.submit(form);

    expect(onSearchHandler).toBeCalledWith("testinput");
  });

  it("should show an error p tag with 'No results' when the fetch is invalid", () => {
    const { getByText } = render(
      <SearchBar noResults={true} onSearch={() => {}} />
    );
    const errorParagraph = getByText("No results");

    expect(errorParagraph).toBeTruthy();
  });

  it("should hide the input placeholder when the fetch is invalid", () => {
    const { queryByPlaceholderText } = render(
      <SearchBar noResults={true} onSearch={() => {}} />
    );

    expect(queryByPlaceholderText("Search GitHub username…")).toBeNull();
  });

  it("should hide the error p tag with 'No results' when the user starts typing again", () => {
    const { queryByText, container } = render(
      <SearchBar noResults={true} onSearch={() => {}} />
    );
    const input = container.querySelector("input")!;

    fireEvent.change(input, { target: { value: "test" } });

    expect(queryByText("No results")).toBe(null);
  });
});
