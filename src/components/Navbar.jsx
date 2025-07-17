import { Link, NavLink } from "react-router-dom";
import { FaSchool } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-40">
      <div className="container mx-auto flex items-center justify-between py-4 px-2 md:px-0">
        <Link to="/" className="flex items-center space-x-2">
          <FaSchool className="text-primary text-2xl" />
          <span className="font-bold text-lg text-green-600">
            Gaushala Public School
          </span>
        </Link>
        <div className="space-x-3 hidden md:block">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/academics" className="nav-link">
            Academics
          </NavLink>
          <NavLink to="/admissions" className="nav-link">
            Admissions
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/events-news" className="nav-link">
            Events & News
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
