import findIcon from "../assets/find.svg";

export function SearchBar() {
  const invalidSearch = false;

  return (
    <form className="relative">
      <input
        className="
        w-full h-[69px] rounded-[15px] pl-20 
        bg-[#FEFEFE] shadow-[0px_16px_30px_-10px_#4660bb31]
        dark:bg-[#1E2A47] dark:shadow-none 
        focus:outline-none font-normal text-lg 
        text-[#222731] dark:text-white
        placeholder:text-[#4B6A9B] 
        dark:placeholder:text-white"
        type="text"
        placeholder="Search GitHub username…"
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
      <img
        className="absolute inset-y-0 my-auto left-8"
        src={findIcon}
        alt="Find Icon"
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
