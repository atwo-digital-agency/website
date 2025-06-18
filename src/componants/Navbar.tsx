import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="min-h-[20vh] p-8">
      <nav className="flex justify-around items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo-white.png"
            alt="A TWO DIGITAL AGENCY (logo)"
            className="size-3/4 lg:size-2/5"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-[20vh] bg-background z-10 left-0 w-full h-full lg:static lg:flex lg:w-auto`}
        >
          <ul className="lg:flex space-y-4 lg:space-y-0 lg:space-x-16 p-4 lg:p-0 lg:text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b pb-2 border-accent"
                    : "hover:text-accent "
                }
              >
                Nos Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b pb-2 border-accent"
                    : "hover:text-accent disabled-link"
                }
              >
                Qui Sommes Nous
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tarifs"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b pb-2 border-accent"
                    : "hover:text-accent disabled-link"
                }
              >
                Tarifs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pro"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b pb-2 border-accent"
                    : "hover:text-accent disabled-link"
                }
              >
                Espace Pro
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent border-b pb-2 border-accent"
                    : "hover:text-accent disabled-link"
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
