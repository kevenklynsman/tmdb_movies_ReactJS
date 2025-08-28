import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const searchTerm = search.trim();

    if (!searchTerm) return;

    navigate(`/search?q=${searchTerm}`);
    setSearch("");
  };

  return (
    <>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie /> MoviesLib
          </Link>
        </h2>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </>
  );
};
