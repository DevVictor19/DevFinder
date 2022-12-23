import { Menu } from "./components/Menu/";
import { UserSearch } from "./components/UserSearch";

export function App() {
  return (
    <main
      className="bg-[#F6F8FF] dark:bg-[#141D2F] min-h-screen flex justify-center px-24
      max-[685px]:px-12 max-[480px]:px-6"
    >
      <div className="max-w-[730px] w-full mt-[144px] mb-12 max-[1000px]:mt-8">
        <Menu />
        <UserSearch />
      </div>
    </main>
  );
}
