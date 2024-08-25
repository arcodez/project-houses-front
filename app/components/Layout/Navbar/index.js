import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <Link className="navbar-brand text-brand" href="/">
          <span className="color-b">Arcodez </span>Estate
          <span className="color-b"> Agency</span>
        </Link>
        <div
          className="navbar-collapse collapse justify-content-center"
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/pages/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/pages/property-grid">
                Property
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/pages/blog-grid">
                Blog
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item " href="/pages/property-single">
                  Property Single
                </Link>
                <Link className="dropdown-item " href="/pages/blog-single">
                  Blog Single
                </Link>
                <Link className="dropdown-item " href="/pages/agents-grid">
                  Agents Grid
                </Link>
                <Link className="dropdown-item " href="/pages/agent-single">
                  Agent Single
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/pages/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
        >
          <i className="bi bi-search" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
