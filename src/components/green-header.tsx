"use client";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import { FiPhone, FiMail, FiInstagram, FiYoutube, FiFacebook, FiTwitter, FiSearch, FiShoppingCart, FiHeart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-[#23856d] py-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FiInstagram /></Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FiYoutube /></Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FiFacebook /></Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter /></Link>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white shadow-md border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42]">Bandage</div>

          {/* Action Icons for Mobile */}
          <div className="flex items-center gap-4 md:hidden">
            <FiSearch className="text-2xl text-[#252B42] cursor-pointer" />
            <FiShoppingCart className="text-2xl text-[#252B42] cursor-pointer" />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <FiX className="text-3xl text-[#252B42]" /> : <FiMenu className="text-3xl text-[#252B42]" />}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <NavLink href="/" text="Home" />
              <NavLink href="/shop" text="Shop" isDropdown />
              <NavLink href="/about" text="About" />
              <NavLink href="/blog" text="Blog" />
              <NavLink href="/contact" text="Contact" />
              <NavLink href="/pages" text="Pages" />
            </ul>
          </nav>

          {/* Action Icons for Desktop */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
          <Image src="/login.svg" alt="Login" width={16} height={16} />
            <button className="text-sm font-medium">Login/Register</button>
            <FiSearch className="text-lg cursor-pointer" />
            <FiShoppingCart className="text-lg cursor-pointer" />
            <FiHeart className="text-lg cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

// Reusable Navbar Link Component
const NavLink = ({ href, text, isDropdown = false }: { href: string; text: string; isDropdown?: boolean }) => (
  <li className={`${isDropdown ? "relative group" : ""}`}>
    <Link href={href} className="hover:text-[#23A6F0] transition-all flex items-center gap-1">
      {text}
      {isDropdown && <FiChevronDown />}
    </Link>
  </li>
);

export default Header;


