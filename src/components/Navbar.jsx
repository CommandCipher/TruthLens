import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleScroll = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (section === "features") {
      document.querySelector("#features")?.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (section === "about") {
      document.querySelector("#about")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <h2>TRUTH LENS</h2>

      <ul>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("features")}>Features</li>
        <li onClick={() => handleScroll("about")}>About</li>
      </ul>

      <div className="nav-buttons">
        <button
          className="login-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="Sign-Up"
          onClick={() => navigate("/login?mode=signup")}
        >
          Sign-Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;