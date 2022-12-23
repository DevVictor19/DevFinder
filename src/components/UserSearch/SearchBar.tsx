import { FormEvent, useRef, useState, useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface Props {
  onSearch: (value: string) => void;
  noResults: boolean;
}

export function SearchBar({ onSearch, noResults }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [invalidSearch, setInvalidSearch] = useState(false);

  useEffect(() => {
    setInvalidSearch(noResults);
  }, [noResults]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;

    if (inputValue === "" || !inputValue) {
      setInvalidSearch(true);
      return;
    }

    inputRef.current.value = "";

    const handledInputValue = inputValue
      .trim()
      .split(" ")
      .filter((item) => item !== "")
      .join("");

    onSearch(handledInputValue);
  };

  const handleChange = () => {
    if (invalidSearch === false) return;

    setInvalidSearch(false);
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
        placeholder="Search GitHub username…"
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
