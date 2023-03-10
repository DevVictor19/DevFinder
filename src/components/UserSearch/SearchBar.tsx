import { FormEvent, useRef, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface Props {
  onSearch: (value: string) => void;
  noResults: boolean;
}

export function SearchBar({ onSearch, noResults }: Props) {
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const invalidSearch = noResults && isTyping === false;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = inputRef.current!.value.trim();

    setIsTyping(false);

    if (inputValue === "" || !inputValue) {
      alert("Empty Fields, please insert anything before searching...");
      return;
    }

    inputRef.current!.value = "";

    const handledInputValue = inputValue
      .split(" ")
      .filter((item) => item !== "")
      .join("");

    onSearch(handledInputValue);
  };

  const handleChange = () => {
    if (invalidSearch === false) return;

    setIsTyping(true);
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
        dark:placeholder:text-white max-[600px]:text-[13px]
        max-[600px]:pl-11 max-[600px]:placeholder:text-[13px]
        max-[480px]:h-[60px]"
        type="text"
        placeholder={invalidSearch ? "" : "Search GitHub username…"}
        ref={inputRef}
        onChange={handleChange}
      />
      <button
        className="
        absolute inset-y-0 my-auto right-[10px]
        h-[50px] rounded-[10px] bg-[#0079FF] px-6
        font-bold text-white hover:bg-[#60ABFF]
        active:bg-[#60ABFF] max-[600px]:text-[13px]
        max-[480px]:px-[18px]"
        type="submit"
      >
        Search
      </button>
      <MagnifyingGlass
        size={27}
        color="#0079FF"
        className="absolute inset-y-0 my-auto left-8 min-h-fit
        max-[600px]:left-4 max-[600px]:w-[17px]"
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
