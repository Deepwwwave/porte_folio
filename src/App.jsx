import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/Header";
import Profil from "./Components/Profil";
import Projects from "./Components/Projects";



function App() {


   return (
      <div className={`${styles.app_layout} bg-gradient-to-r from-gray-900  to-zinc-900`}>
         <Header />
         <Routes>
            <Route index path="/" element={<Profil />} />
            <Route path="/Projects" element={<Projects />} />
         </Routes>
      </div>
   );
}

export default App;
