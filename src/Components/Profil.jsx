import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import useFetchData from "../hooks/useFetchData"; // Adjust the path as needed

const TechnologyImages = ({ url, exceptions = [] }) => {
   const { data, loading, error } = useFetchData(url);
   const [techImages, setTechImages] = useState([]);
   const [techNames, setTechNames] = useState([]);

   //Récupère les images et les noms des technos en enlevant les doublons et exeptions.
   useEffect(() => {
      if (data) {
         const imagesSet = new Set();
         const namesSet = new Set();
         data.projects.forEach((project) => {
            project.technologies.forEach((tech) => {
               if (!exceptions.includes(tech.image)) {
                  imagesSet.add(tech.image);
                  namesSet.add(tech.name);
               }
            });
         });
         setTechImages([...imagesSet]);
         setTechNames([...namesSet]);
      }
   }, [data, exceptions]);

   return (
      <>
         <div className="text-xl mb-4">
            <ReactTyped strings={Array.from(techNames)} typeSpeed={100} backSpeed={100} loop />
         </div>
         <div className="tech-images flex flex-wrap justify-center px-12 max-w-96 lg:max-w-md">
            {techImages.map((image, index) => (
               <img key={index} src={`/images/${image}`} alt={`Technology ${index}`} className="w-10 m-2 " />
            ))}
         </div>
      </>
   );
};

export default function Profil() {
   const url = "/projects.json";
   const exceptions = ["angular-logo.png", "bootstrap-logo.png", "bootstrap", "angular"];

   return (
      <main className="flex flex-col items-center">
         <h1 className="text-4xl mt-12 mb-3">Lucas Nandan</h1>
         <div>
            <ReactTyped strings={["Developpeur web fullstack"]} typeSpeed={100} backSpeed={100} className="text-2xl"/>
         </div>
         <div className="">
            <h2 className="text-xl mt-16 mb-8 font-bold text-center rounded-md bg-cyan-500 text-slate-800 w-40">Compétences</h2>
         </div>
         <TechnologyImages url={url} exceptions={exceptions} />
      </main>
   );
}
