import { LocalityIcon } from "../icons/LocalityIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { CompanyIcon } from "../icons/CompanyIcon";

export function UserSocialMedias() {
  return (
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
  );
}
