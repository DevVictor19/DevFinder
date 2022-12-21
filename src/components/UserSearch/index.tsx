import { SearchBar } from "./SearchBar";
import { UserResume } from "./UserResume";

export function UserSearch() {
  return (
    <section className="mt-[35px]">
      <SearchBar />
      <UserResume />
    </section>
  );
}
