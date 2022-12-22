import { LocalityIcon } from "../icons/LocalityIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { CompanyIcon } from "../icons/CompanyIcon";

interface Props {
  location: string | null;
  twitter: string | null;
  blog: string | null;
  company: string | null;
}

export function UserSocialMedias({ blog, company, location, twitter }: Props) {
  return (
    <ul className="mt-9 grid grid-cols-2 gap-y-5 gap-x-16">
      <li className="flex gap-4">
        <div>
          <LocalityIcon
            pathClassName={`${
              location ? "dark:fill-[#fff]" : "fill-[rgb(229, 231, 235)]"
            }`}
          />
        </div>
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {location ?? <span className="text-slate-400">Not Avaliable</span>}
        </p>
      </li>
      <li className="flex gap-4">
        <div>
          <TwitterIcon
            pathClassName={`${
              twitter ? "dark:fill-[#fff]" : "fill-[rgb(229, 231, 235)]"
            }`}
          />
        </div>
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {twitter ? (
            `@${twitter}`
          ) : (
            <span className="text-slate-400">Not Avaliable</span>
          )}
        </p>
      </li>
      <li className="flex gap-4">
        <div>
          <LinkIcon
            pathClassName={`${
              blog ? "dark:fill-[#fff]" : "fill-[rgb(229, 231, 235)]"
            }`}
          />
        </div>
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {blog ? (
            <a className="hover:underline" href={blog} target="_blank">
              Personal Blog
            </a>
          ) : (
            <span className="text-slate-400">Not Avaliable</span>
          )}
        </p>
      </li>
      <li className="flex gap-4">
        <div>
          <CompanyIcon
            pathClassName={`${
              company ? "dark:fill-[#fff]" : "fill-[rgb(229, 231, 235)]"
            }`}
          />
        </div>
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {company ?? <span className="text-slate-400">Not Avaliable</span>}
        </p>
      </li>
    </ul>
  );
}
