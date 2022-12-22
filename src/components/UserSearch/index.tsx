import { useCallback, useState } from "react";
import { UserSchema } from "../../interfaces/UserSchema";
import { SearchBar } from "./SearchBar";
import { UserResume } from "./UserResume";

export function UserSearch() {
  const [user, setUser] = useState<UserSchema | null>(null);

  const handleSearch = useCallback(
    (data: UserSchema) => {
      setUser(data);
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
