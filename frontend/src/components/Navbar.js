import { useState } from "react";
import { Menu, Home, FilePlus, List, User } from "lucide-react";

function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">Voice of the People</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">

          <li
            className="flex items-center gap-1 cursor-pointer hover:text-gray-200"
            onClick={() => setPage("dashboard")}
          >
            <Home size={18}/> Dashboard
          </li>

          <li
            className="flex items-center gap-1 cursor-pointer hover:text-gray-200"
            onClick={() => setPage("submit")}
          >
            <FilePlus size={18}/> Submit
          </li>

          <li
            className="flex items-center gap-1 cursor-pointer hover:text-gray-200"
            onClick={() => setPage("complaints")}
          >
            <List size={18}/> Complaints
          </li>

          <li
            className="flex items-center gap-1 cursor-pointer hover:text-gray-200"
            onClick={() => setPage("profile")}
          >
            <User size={18}/> Profile
          </li>

        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">

          <li onClick={() => setPage("dashboard")}>Dashboard</li>
          <li onClick={() => setPage("submit")}>Submit Complaint</li>
          <li onClick={() => setPage("complaints")}>My Complaints</li>
          <li onClick={() => setPage("profile")}>Profile</li>

        </ul>
      )}

    </nav>
  );
}

export default Navbar;