import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const checkPathName = (path) =>
    path === location.pathname ? styles.navbar_linkActivated : styles.navbar_link;

  return (
    <nav className={styles.navbar_layout}>
      <ul className={styles.navbar_linksLayout}>
        <NavLink
          to="/"
          key="/"
          className={checkPathName("/")}
        >
          <button>Moi</button>
        </NavLink>
        <NavLink
          to="projects"
          key="/projects"
          className={checkPathName("/projects")}
        >
          <button>Projets</button>
        </NavLink>
      </ul>
    </nav>
  );
}
