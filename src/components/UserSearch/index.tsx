import { useCallback, useState } from "react";
import { UserSchema } from "../../interfaces/UserSchema";
import { SearchBar } from "./SearchBar";
import { UserResume } from "./UserResume";

export function UserSearch() {
  const [user, setUser] = useState<UserSchema | null>(null);

  const handleSearch = useCallback(
    (search: string) => {
      fetch("https://api.github.com/users/" + search)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return response.json();
        })
        .then((data) => {
          const user: UserSchema = {
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

          setUser(user);
        })
        .catch(console.log);
    },
    [setUser]
  );

  return (
    <section className="mt-[35px]">
      <SearchBar onSearch={handleSearch} />
      {user && <UserResume user={user} />}
    </section>
  );
}
