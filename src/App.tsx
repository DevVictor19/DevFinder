import { Menu } from "./components/Menu/";
import { UserSearch } from "./components/UserSearch";

export function App() {
  return (
    <main className="bg-[#F6F8FF] dark:bg-[#141D2F] min-h-screen flex justify-center px-24">
      <div className="max-w-[730px] w-full mt-[144px] mb-12">
        <Menu />
        <UserSearch />
      </div>
    </main>
  );
}
