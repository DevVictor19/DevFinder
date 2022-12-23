import { MapPin, TwitterLogo, Link, Buildings } from "phosphor-react";

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
        <MapPin
          size={20}
          weight="fill"
          className={`text-[#4B6A9B] ${
            location ? "dark:text-white" : "text-[#4B6A9B]"
          }`}
        />
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {location ?? <span className="text-slate-400">Not Avaliable</span>}
        </p>
      </li>

      <li className="flex gap-4">
        <TwitterLogo
          size={20}
          weight="fill"
          className={`text-[#4B6A9B] ${
            twitter ? "dark:text-white" : "text-[#4B6A9B]"
          }`}
        />
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {twitter ? (
            `@${twitter}`
          ) : (
            <span className="text-slate-400">Not Avaliable</span>
          )}
        </p>
      </li>

      <li className="flex gap-4">
        <Link
          size={20}
          weight="fill"
          className={`text-[#4B6A9B] ${
            blog ? "dark:text-white" : "text-[#4B6A9B]"
          }`}
        />
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
        <Buildings
          size={20}
          weight="fill"
          className={`text-[#4B6A9B] ${
            company ? "dark:text-white" : "text-[#4B6A9B]"
          }`}
        />
        <p className="font-normal text-[15px] text-[#4B6A9B] dark:text-white">
          {company ?? <span className="text-slate-400">Not Avaliable</span>}
        </p>
      </li>
    </ul>
  );
}
