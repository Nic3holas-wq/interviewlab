import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50">
    <div className="flex justify-between items-center px-6 py-4 bg-white ">
            {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="text-xl font-bold">
          <span className="text-purple-600">Interview</span>
          <span className="text-orange-500">LAB</span>
        </div>
      </Link>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
        <Link 
          href="#how-it-works" 
          className="hover:text-purple-600 transition-colors duration-200"
        >
          How it works
        </Link>
        <Link 
          href="#features" 
          className="hover:text-purple-600 transition-colors duration-200"
        >
          Features
        </Link>
        <Link 
          href="#pricing" 
          className="hover:text-purple-600 transition-colors duration-200 flex items-center"
        >
          Pricing
          <span className="text-orange-500 font-bold ml-1 text-sm">FREE</span>
        </Link>
        <Link 
          href="#faq" 
          className="hover:text-purple-600 transition-colors duration-200"
        >
          FAQ
        </Link>
      </div>

      {/* Button */}
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-sm">
        Start free trial
      </button>
    </div>
      <hr className="border-gray-200"/>
    </nav>
  );
};

export default Navbar;