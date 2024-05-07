import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const LINKS = [
    {
      id: "about-me",
      label: "About Me",
    },
    {
      id: "tech-stack",
      label: "Tech",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "contact-me",
      label: "Contact Me",
    },
  ];

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light bg-white mb-1 px-3">
      <div className="container-fluid">
        <Link
          activeClass="active"
          className="navbar-brand cursor-pointer"
          to={"hero"}
          spy={true}
          smooth={true}
          offset={-150}
          duration={100}
        >
          {"Mohammed Kothaliya"}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {LINKS?.map((link, index: number) => (
              <li className="nav-item" key={index}>
                <Link
                  activeClass="active"
                  className="nav-link cursor-pointer"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
