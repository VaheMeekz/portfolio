import React, { useState } from "react";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const menuItems = [
  {
    title: "Home",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "About",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Portfolio",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Skils",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Education",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Experience",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Contacts",
    url: "#",
    cName: "nav-links",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">DEV</h1>
      <div className="menu-icon" onClick={handleClick}>
        {active ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
