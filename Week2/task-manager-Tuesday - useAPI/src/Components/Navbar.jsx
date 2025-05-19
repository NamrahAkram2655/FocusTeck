import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  };

  const linksContainerStyle = {
    display: "flex",
    listStyleType: "none",
    padding: 0,
  };

  const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
  };


  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        Task Manager
      </Link>
      <ul style={linksContainerStyle}>
        <li className="navlinks">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li className="navlinks">
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li className="navlinks">
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>{" "}
          {/* Add Contact link */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
