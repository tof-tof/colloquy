import { useAuthUser } from "next-firebase-auth";
import { IoExitOutline } from "react-icons/io5";

export default function HeaderBar({ name }) {
  const authUser = useAuthUser();
  return (
    <header className="w-full border-b p-2 grid grid-cols-2 bg-secondary">
      <div className="justify-self-start pl-4">
        <h1 className="fogie-Font">Colloquy</h1>
        <h2 className="text-xl font-medium pl-28 text-themeDarkblue">{name}</h2>
      </div>
      <button
        className="btn py-0 justify-self-end mx-7 px-1 border-0 bg-primary text-white grid grid-cols-1"
        onClick={() => authUser.signOut()}
      >
        <IoExitOutline size={28} className="justify-self-center" />
        <label className="text-sm tracking-tight">Sign out</label>
      </button>
    </header>
  );
}
