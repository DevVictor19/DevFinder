import { FormEvent, useRef } from "react";
import findIcon from "../../assets/find.svg";
import { UserSchema } from "../../interfaces/UserSchema";

interface Props {
  onSearch: (data: UserSchema) => void;
}

export function SearchBar({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const invalidSearch = false;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;

    try {
      const response = await fetch(
        "https://api.github.com/users/" + inputValue
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      console.log(data);

      const newUser: UserSchema = {
        avatar_url: data.avatar_url,
        bio: data.bio,
        blog: data.blog,
        company: data.company,
        created_at: data.created_at,
        followers: data.followers,
        following: data.following,
        location: data.location,
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        twitter_username: data.twitter_username,
      };

      console.log(newUser);

      onSearch(newUser);
    } catch (error) {
      console.log(error);
    }
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
