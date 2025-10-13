import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Product & Socials */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Interview <span className="text-orange-400">LAB</span></h2>
          <p className="mb-4">Making interviews fearless through AI-powered coaching.</p>
          <div className="flex gap-4 text-xl sm:text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-orange-400"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-400"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-orange-400"><FaLinkedinIn /></a>
            <a href="#" aria-label="TikTok" className="hover:text-orange-400"><FaTiktok /></a>
            <a href="#" aria-label="X" className="hover:text-orange-400"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2: Product Links */}
        <div>
          <h3 className="font-semibold mb-2 sm:mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>About us</li>
            <li>Blog</li>
            <li>How it works</li>
            <li>Careers</li>
            <li>Help center</li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="font-semibold mb-2 sm:mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Pricing</li>
            <li>Our mission</li>
            <li>Community</li>
            <li>Testimonials</li>
            <li>Our vision</li>
            <li>Webinar</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="font-semibold mb-2 sm:mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Interview tips</li>
            <li>Partners</li>
            <li>Career guide</li>
            <li><a href="mailto:contact@nicho.co.ke" className="underline hover:text-gray-200">contact@nicho.co.ke</a></li>
            <li>+(254) 716 453 748</li>
            <li><a href="mailto:support@nicho.co.ke" className="underline hover:text-gray-200">support@nicho.co.ke</a></li>
          </ul>
        </div>
      </div>

     <div className="mt-8 sm:mt-12 border-t border-white/30 pt-6 text-center text-sm">
         © {new Date().getFullYear()} InterviewLab. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy
    </div>

    </footer>
  );
};

export default Footer;
