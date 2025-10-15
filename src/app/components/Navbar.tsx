'use client';
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SignOut } from "./SignOut";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const loggedIn = !!session; // simple, no state needed

  const handleStartClick = () => {
    if (loggedIn) {
      router.push("/interview"); // Go to interview if signed in
    } else {
      router.push("/signin"); // Otherwise sign in
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-lg sm:text-xl font-bold">
            <span className="text-purple-600">Interview</span>
            <span className="text-orange-500">LAB</span>
          </div>
        </Link>

        {/* Welcome Message */}
        {session && (
          <p className="hidden sm:block text-gray-700 font-medium">
            Welcome,{" "}
            <span className="text-gray-400">
              {session.user?.name?.split(" ")[0]} 👋
            </span>
          </p>
        )}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-900 font-medium">
          <Link href="#how-it-works" className="hover:text-purple-600 transition">
            How it works
          </Link>
          <Link href="#features" className="hover:text-purple-600 transition">
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:text-purple-600 transition flex items-center"
          >
            Pricing
            <span className="text-orange-500 font-bold ml-1 text-sm">FREE</span>
          </Link>
          <Link href="#faq" className="hover:text-purple-600 transition">
            FAQ
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          {loggedIn && (
            <div className="hidden sm:block">
              <SignOut/>
            </div>
            
          )}

          <Link
            href={"/interview"}
            className="bg-purple-600 text-white text-sm px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition shadow-sm"
          >
            {loggedIn ? "Start Interview" : "Start Free Trial"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
