import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import search from "../assets/search-icon.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-10 py-3 border-b border-gray-200">
      <div className="flex items-center justify-between">
        {/* Left: Logo & Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 text-md text-secondary font-medium">
            <Link className="text-primary font-semibold" to={"/"}>
              Find Jobs
            </Link>
            <Link className="hover:text-primary" to={"top-companies"}>
              Top Companies
            </Link>
            <Link className="hover:text-primary">Job Tracker</Link>
            <Link className="hover:text-primary">My Calendar</Link>
            <Link className="hover:text-primary">Documents</Link>
            <Link className="hover:text-primary">Messages</Link>
            <Link className="hover:text-primary">Notifications</Link>
            
          </ul>
        </div>

        {/* Right: Search + Button + Profile */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            {/* <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" /> */}
            <img
              className="absolute left-3 top-2.5 w-4 h-4"
              src={search}
              alt=""
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-2 bg-gray-50 font-medium text-sm rounded-md focus:outline-none w-72"
            />
          </div>

          {/* Resume Builder Button */}
          <button className="bg-primary font-medium text-white text-sm px-4 py-2 rounded-md hover:bg-blue-800">
            Resume Builder
          </button>

          {/* Profile Picture */}
          <img
            src={profile}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border-2 border-gray-200"
          />
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 lg:hidden flex flex-col space-y-3 text-sm font-medium text-gray-700">
          <span className="cursor-pointer hover:text-blue-600">Find Jobs</span>
          <span className="cursor-pointer hover:text-blue-600">
            Top Companies
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Job Tracker
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            My Calendar
          </span>
          <span className="cursor-pointer hover:text-blue-600">Documents</span>
          <span className="cursor-pointer hover:text-blue-600">Messages</span>
          <span className="cursor-pointer hover:text-blue-600">
            Notifications
          </span>

          <div className="pt-4 flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 bg-sky-100 text-sm rounded-md focus:outline-none"
            />
            <button className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-blue-800">
              Resume Builder
            </button>
          </div>

          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 mt-2 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
