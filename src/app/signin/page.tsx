'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/interview" });
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen bg-gray-50">
      <div className="bg-white w-[90%] sm:w-[50%] rounded-2xl shadow-lg h-[70%] p-10 flex flex-col items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4">
          <div className="text-lg sm:text-2xl font-bold">
            <span className="text-purple-600">Interview</span>
            <span className="text-orange-500">LAB</span>
          </div>
        </Link>

        <p className="text-gray-500 mb-4 text-center">
          Sign in to continue with your AI-powered interview practice.
        </p>

        <button
          onClick={handleSignIn}
          disabled={loading}
          className={`flex gap-4 mt-18 items-center justify-center text-gray-700 px-6 py-2 rounded-3xl border border-gray-300 hover:bg-gray-100 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <Image
            src="/assets/google-logo.png"
            alt="Google Logo"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <span>{loading ? "Signing in..." : "Continue with Google"}</span>
        </button>
      </div>
    </div>
  );
}
