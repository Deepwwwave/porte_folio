import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const checkPathName = (path) =>
     path === location.pathname ? `${styles.navbar_linkActivated} shadow-md shadow-cyan-500/30 ` : styles.navbar_link;

  return (
    <nav className={`bg-transparent ${styles.navbar_layout} text-xl`}>
      <ul className={styles.navbar_linksLayout}>
        <NavLink
          to="/portfolio/"
          key="portfolio"
          className={`${checkPathName("/portfolio/")} rounded-full `}
        >
          <button>Profil</button>
        </NavLink>
        <NavLink
          to="/portfolio/projects"
          key="projects"
          className={`${checkPathName("/portfolio/projects")} rounded-full `}
        >
          <button>Projets</button>
        </NavLink>
      </ul>
    </nav>
  );
}
