import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./Components/Header";
import Me from "./Components/Me";
import Projects from "./Components/Projects";



function App() {
  

  return (
    <div className={styles.app_layout}>
      <Header/>
      <main className={styles.app_main}>

      <Routes>
          <Route index path="/" element={<Me/>}/>
          <Route path="/Projects" element={<Projects/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
