interface Props {
  repos: number;
  followers: number;
  following: number;
}

export function UserNumbers({ repos, followers, following }: Props) {
  return (
    <ul
      className="mt-8 bg-[#F6F8FF] rounded-[10px] flex gap-[82px] 
      px-8 py-[15px] w-full dark:bg-[#141D2F] max-[600px]:justify-evenly 
      justify-center max-[600px]:gap-0 max-[600px]:px-[14px] 
      max-[600px]:py-[18px]"
    >
      <li>
        <h4
          className="font-normal text-[#4B6A9B] text-[13px]
        dark:text-slate-200 max-[600px]:text-[11px]"
        >
          Repos
        </h4>
        <p
          className="font-bold text-[22px] text-[#2B3442]
        dark:text-white max-[600px]:text-base max-[600px]:text-center"
        >
          {repos}
        </p>
      </li>
      <li>
        <h4
          className="font-normal text-[#4B6A9B] text-[13px]
        dark:text-slate-200 max-[600px]:text-[11px]"
        >
          Followers
        </h4>
        <p
          className="font-bold text-[22px] text-[#2B3442]
        dark:text-white max-[600px]:text-base max-[600px]:text-center"
        >
          {followers}
        </p>
      </li>
      <li>
        <h4
          className="font-normal text-[#4B6A9B] text-[13px]
        dark:text-slate-200 max-[600px]:text-[11px]"
        >
          Following
        </h4>
        <p
          className="font-bold text-[22px] text-[#2B3442]
             dark:text-white max-[600px]:text-base max-[600px]:text-center"
        >
          {following}
        </p>
      </li>
    </ul>
  );
}
