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
        shadow-custom dark:shadow-none p-12 min-h-[444px]"
    >
      <section className="flex gap-9 justify-center">
        <div className="w-[117px] h-[117px] rounded-full overflow-hidden shrink-0">
          <img src={user.avatar_url} alt="avatar img" />
        </div>
        <div
          className="flex max-[890px]:flex-col justify-between max-[890px]:justify-start 
          items-baseline w-full"
        >
          <div>
            <h1
              className="font-bold text-[26px] text-[#2B3442] 
          dark:text-white"
            >
              {user.name ?? "No name provided"}
            </h1>
            <h2 className="mt-0.5 font-normal text-base text-[#0079FF]">
              @{user.login}
            </h2>
          </div>
          <h3
            className="font-normal text-[15px] text-[#697C9A] 
          dark:text-slate-300 max-[890px]:mt-1"
          >
            {`Joined ${day} ${month} ${year}`}
          </h3>
        </div>
      </section>

      <section className="max-w-[480px] w-full max-[890px]:max-w-none ml-[153px] max-[890px]:ml-0">
        <p
          className="font-normal text-[15px] text-[#4B6A9B] 
          dark:text-white mt-[-30px] max-[890px]:mt-6"
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
