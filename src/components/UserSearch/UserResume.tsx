import { UserSchema } from "../../interfaces/UserSchema";
import { UserNumbers } from "./UserNumbers";
import { UserSocialMedias } from "./UserSocialMedias";

interface Props {
  user: UserSchema;
}

export function UserResume({ user }: Props) {
  const date = new Date(user.created_at);
  const day = date.getDay();
  const month = date.toLocaleDateString("default", { month: "short" });
  const year = date.getFullYear();

  return (
    <article
      className="mt-6 bg-[#FEFEFE] dark:bg-[#1E2A47] rounded-[15px]
        shadow-custom dark:shadow-none p-12 flex gap-9 min-h-[444px]"
    >
      <div className="w-[117px] h-[117px] rounded-full overflow-hidden shrink-0">
        <img src={user.avatar_url} alt="avatar img" />
      </div>
      <section className="w-full">
        <div className="flex justify-between items-center">
          <h1
            className="font-bold text-[26px] text-[#2B3442] 
          dark:text-white"
          >
            {user.name ?? "No name provided"}
          </h1>
          <h2
            className="font-normal text-[15px] text-[#697C9A] 
          dark:text-slate-300"
          >
            {`Joined ${day} ${month} ${year}`}
          </h2>
        </div>
        <h3 className="mt-0.5 font-normal text-base text-[#0079FF]">
          @{user.login}
        </h3>
        <p
          className="mt-5 font-normal text-[15px] text-[#4B6A9B] 
          dark:text-white"
        >
          {user.bio ?? (
            <span className="text-slate-500">This profile has no bio</span>
          )}
        </p>
        <UserNumbers
          followers={user.followers}
          following={user.following}
          repos={user.public_repos}
        />
        <UserSocialMedias
          blog={user.blog}
          company={user.company}
          location={user.location}
          twitter={user.twitter_username}
        />
      </section>
    </article>
  );
}
