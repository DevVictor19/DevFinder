import { SearchBar } from "./SearchBar";
import { UserInfoCard } from "./UserInfoCard";

export function UserSearch() {
  return (
    <section className="mt-[35px]">
      <SearchBar />
      <UserInfoCard />
    </section>
  );
}
