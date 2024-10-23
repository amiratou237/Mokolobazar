import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for the hamburger menu

const HeaderSite = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link className="block text-black" to="/">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="text-blue-600">Mokolo</span>Bazar
            </h1>
          </Link>

          {/* Hamburger Button visible on tablet and smaller screens */}
          <button
            className="lg:hidden text-3xl text-blue-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation visible on larger screens */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6 text-xl">
              <li><Link className="text-gray-500 transition hover:text-blue-500/75" to="/">Accueil</Link></li>
              <li><Link className="text-gray-500 transition hover:text-blue-500/75" to="/about">À propos</Link></li>
              <li><Link className="text-gray-500 transition hover:text-blue-500/75" to="/products">Produits</Link></li>
            </ul>
          </nav>

          {/* Login and Register buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link className="rounded-md bg-blue-600 px-5 py-2.5 text-xl text-white shadow" to="/login">
              Login
            </Link>
            <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-xl text-blue-600 hidden sm:block" to="/register">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Appears when hamburger is clicked */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link className="text-gray-500 transition hover:text-blue-500/75" to="/">Accueil</Link>
              <Link className="text-gray-500 transition hover:text-blue-500/75" to="/about">À propos</Link>
              <Link className="text-gray-500 transition hover:text-blue-500/75" to="/products">Produits</Link>
            </nav>
          </div>
        )}

        {/* Search Bar */}
        <SearchBar />
      </div>
    </header>
  );
};

const SearchBar = () => (
  <div className="relative w-full max-w-xl mx-auto bg-white mt-4 mb-4 rounded-full">
    <input
      placeholder="Chaussures etc."
      className="rounded-full w-full h-12 sm:h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md"
      type="text"
      name="query"
      id="query"
    />
    <button
      type="submit"
      className="absolute right-3 top-2 sm:top-3 h-8 sm:h-10 px-4 py-2 text-white bg-blue-600 rounded-full"
    >
      Recherche
    </button>
  </div>
);

export default HeaderSite;
