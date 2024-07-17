import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/Header";
import Profil from "./Components/Profil";
import Projects from "./Components/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
   return (
      <div className={`${styles.app_layout} bg-gradient-to-r from-gray-900  to-zinc-900`}>
         <Header />
         <Routes>
            <Route index path="/portfolio/" element={<Profil />} />
            <Route path="/portfolio/projects" element={<Projects />} />
         </Routes>
         <ScrollToTop className="opacity-50 p-1.5 " smooth />
      </div>
   );
}

export default App;
