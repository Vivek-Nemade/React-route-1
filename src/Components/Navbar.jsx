import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        backgroundColor: "gray",
        padding: "10px",
        color: "white",
        textDecoration: "none",
      }}
    >
      <Link to="/">
        <button
          style={{ fontsize: "35px", padding: "10px", fontWeight: "700" }}
        >
          Home
        </button>
      </Link>
      <Link to="/about">
        <button
          style={{ fontsize: "35px", padding: "10px", fontWeight: "700" }}
        >
          About
        </button>
      </Link>
      <Link to="/products">
        <button
          style={{ fontsize: "35px", padding: "10px", fontWeight: "700" }}
        >
          Products
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
