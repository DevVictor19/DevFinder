import avatar from "../../assets/Oval.png";
import { CompanyIcon } from "../icons/CompanyIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { LocalityIcon } from "../icons/LocalityIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export function UserInfoCard() {
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
        <ul
          className="mt-8 bg-[#F6F8FF] rounded-[10px] flex gap-[82px] 
            px-8 py-[15px] w-full dark:bg-[#141D2F]"
        >
          <li>
            <h4
              className="font-normal text-[#4B6A9B] text-[13px]
            dark:text-slate-200"
            >
              Repos
            </h4>
            <p
              className="font-bold text-[22px] text-[#2B3442]
             dark:text-white"
            >
              8
            </p>
          </li>
          <li>
            <h4
              className="font-normal text-[#4B6A9B] text-[13px]
              dark:text-slate-200"
            >
              Followers
            </h4>
            <p
              className="font-bold text-[22px] text-[#2B3442]
             dark:text-white"
            >
              3938
            </p>
          </li>
          <li>
            <h4
              className="font-normal text-[#4B6A9B] text-[13px]
              dark:text-slate-200"
            >
              Following
            </h4>
            <p
              className="font-bold text-[22px] text-[#2B3442]
             dark:text-white"
            >
              9
            </p>
          </li>
        </ul>
        <ul className="mt-9 grid grid-cols-2 gap-y-5 gap-x-16">
          <li className="flex gap-4">
            <div>
              <LocalityIcon pathClassName="dark:fill-[#fff]" />
            </div>
            <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
              San Francisco
            </p>
          </li>
          <li className="flex gap-4">
            <div>
              <TwitterIcon pathClassName="dark:fill-[#fff]" />
            </div>
            <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
              Not Available
            </p>
          </li>
          <li className="flex gap-4">
            <div>
              <LinkIcon pathClassName="dark:fill-[#fff]" />
            </div>
            <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
              <a
                className="hover:underline"
                href="https://github.blog"
                target="_blank"
              >
                https://github.blog
              </a>
            </p>
          </li>
          <li className="flex gap-4">
            <div>
              <CompanyIcon pathClassName="dark:fill-[#fff]" />
            </div>
            <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
              @github
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
}
