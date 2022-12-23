import { FormEvent, useRef } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface Props {
  onSearch: (value: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const invalidSearch = false;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;

    if (inputValue === "" || !inputValue) {
      return;
    }

    const handledInputValue = inputValue
      .trim()
      .split(" ")
      .filter((item) => item !== "")
      .join("");

    onSearch(handledInputValue);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        className="
        w-full h-[69px] rounded-[15px] pl-20 
        bg-[#FEFEFE] shadow-custom
        dark:bg-[#1E2A47] dark:shadow-none 
        focus:outline-none font-normal text-lg 
        text-[#222731] dark:text-white
        placeholder:text-[#4B6A9B] 
        dark:placeholder:text-white"
        type="text"
        placeholder="Search GitHub username…"
        ref={inputRef}
      />
      <button
        className="
        absolute inset-y-0 my-auto right-[10px]
        h-[50px] rounded-[10px] bg-[#0079FF] px-6
        font-bold text-white hover:bg-[#60ABFF]
        active:bg-[#60ABFF]"
        type="submit"
      >
        Search
      </button>
      <MagnifyingGlass
        size={27}
        color="#0079FF"
        className="absolute inset-y-0 my-auto left-8 min-h-fit"
      />
      {invalidSearch && (
        <p
          className="absolute inset-y-0 my-auto right-[140px] 
          h-min text-[#F74646] font-bold text-[15px]"
        >
          No results
        </p>
      )}
    </form>
  );
}
