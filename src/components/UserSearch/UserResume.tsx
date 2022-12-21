import avatar from "../../assets/Oval.png";
import { UserNumbers } from "./UserNumbers";
import { UserSocialMedias } from "./UserSocialMedias";

export function UserResume() {
  return (
    <article
      className="mt-6 bg-[#FEFEFE] dark:bg-[#1E2A47] rounded-[15px]
        shadow-custom dark:shadow-none p-12 flex gap-9 min-h-[444px]"
    >
      <div className="w-[117px] h-[117px] rounded-full overflow-hidden shrink-0">
        <img src={avatar} alt="avatar img" />
      </div>
      <section className="w-full">
        <div className="flex justify-between items-center">
          <h1
            className="font-bold text-[26px] text-[#2B3442] 
          dark:text-white"
          >
            The Octocat
          </h1>
          <h2
            className="font-normal text-[15px] text-[#697C9A] 
          dark:text-slate-300"
          >
            Joined 25 Jan 2011
          </h2>
        </div>
        <h3 className="mt-0.5 font-normal text-base text-[#0079FF]">
          @octocat
        </h3>
        <p
          className="mt-5 font-normal text-[15px] text-[#4B6A9B] 
          dark:text-white"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <UserNumbers />
        <UserSocialMedias />
      </section>
    </article>
  );
}
