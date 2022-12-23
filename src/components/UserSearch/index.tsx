import { useCallback, useState, lazy, Suspense } from "react";
import { UserSchema } from "../../interfaces/UserSchema";
import { Spinner } from "../Spinner";
import { SearchBar } from "./SearchBar";

const UserResume = lazy(() =>
  import("./UserResume").then((module) => ({
    default: module.UserResume,
  }))
);

export function UserSearch() {
  const [user, setUser] = useState<UserSchema | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = useCallback(
    (search: string) => {
      fetch("https://api.github.com/users/" + search)
        .then((response) => {
          setUser(null);
          setNoResults(false);
          setIsSearching(true);

          if (!response.ok) {
            setIsSearching(false);
            setNoResults(true);
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

          setIsSearching(false);
          setUser(user);
        })
        .catch(console.log);
    },
    [setUser]
  );

  return (
    <section className="mt-[35px]">
      <SearchBar onSearch={handleSearch} noResults={noResults} />
      {user && (
        <Suspense
          fallback={
            <Spinner className="min-h-[200px] flex items-center justify-center" />
          }
        >
          <UserResume user={user} />
        </Suspense>
      )}
      {isSearching && (
        <Spinner className="min-h-[200px] flex items-center justify-center" />
      )}
    </section>
  );
}
