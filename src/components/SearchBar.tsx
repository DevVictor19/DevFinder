import findIcon from "../assets/find.svg";

export function SearchBar() {
  const invalidSearch = false;

  return (
    <form className="relative">
      <input
        className="
        w-full h-[69px] rounded-[15px] pl-20 
        bg-light-element shadow-light 
        dark:bg-dark-element dark:shadow-none 
        focus:outline-none font-normal text-lg 
        text-light-text dark:text-dark-text
        placeholder:text-light-soft-400 
        dark:placeholder:text-dark-soft-400"
        type="text"
        placeholder="Search GitHub username…"
      />
      <button
        className="
        absolute inset-y-0 my-auto right-[10px]
        h-[50px] rounded-[10px] bg-custom-blue px-6
        font-bold text-white hover:bg-h-custom-blue
        active:bg-h-custom-blue"
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
          h-min text-red-500 font-bold text-[15px]"
        >
          No results
        </p>
      )}
    </form>
  );
}
