import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button
       className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
       onClick={() => signOut({ callbackUrl: "/" })}>
      Sign out
    </button>
  );
};
