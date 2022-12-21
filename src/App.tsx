import { AppMenu } from "./components/AppMenu";
import { UserSearch } from "./components/UserSearch";

export function App() {
  return (
    <main className="bg-[#F6F8FF] dark:bg-[#141D2F] min-h-screen flex justify-center">
      <div className="max-w-[730px] w-full mt-[144px]">
        <AppMenu />
        <UserSearch />
      </div>
    </main>
  );
}
