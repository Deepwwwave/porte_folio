import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import useFetchData from "../hooks/useFetchData"; // Adjust the path as needed.
import styles from "../styles/Profil.module.css";

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
         <div className="tech-images flex flex-wrap justify-center mb-8 px-12 max-w-96 lg:max-w-md">
            {techImages.map((image, index) => (
               <img key={index} src={`/portfolio/images/${image}`} alt={`Technology ${index}`} className="w-10 m-2 " />
            ))}
         </div>
      </>
   );
};

export default function Profil() {
   const url = "/projects.json";
   const exceptions = ["angular-logo.png", "bootstrap-logo.png", "bootstrap", "angular"];

   return (
      <main className={`flex flex-col items-center lg:w-3/4 xl:ml-10 xl:pr-56 2xl:w-3/4 lg:pt-40 mb-40 ${styles.profil_layout} `}>
         <h1 className="text-4xl mt-2 mb-3">Lucas Nandan</h1>
         <section>
            <ReactTyped strings={["Développeur fullstack javascript"]} typeSpeed={100} backSpeed={100} className="text-xl" />
         </section>

         <h2 className="text-xl mt-16 p-1 mb-8 text-center rounded-md   bg-cyan-500 text-slate-800 w-40">Compétences</h2>

         <TechnologyImages url={url} exceptions={exceptions} />
         <p className="italic m-8 text-justify  whitespace-pre-wrap md:mx-28 text-lg	">
         Développeur passionné et motivé, je me distingue par mon goût pour l'optimisation, la créativité, et l'apprentissage continu. Ayant toujours évolué dans le milieu de l'informatique, je suis un professionnel posé et réfléchi, capable de mener à bien des projets innovants et efficaces.

         </p>
         <h3 className="text-xl mt-16 p-1 mb-4 text-center rounded-md  border border-cyan-500 text-slate-white w-40">Social</h3>
         <section className=" flex space-x-16 mt-12 mb-10">
            <Link to="https://github.com/Deepwwwave" target="_blank">
               <img className="w-12" src="images/github-logo.png" alt="github" />
               <p className="mt-2">Github</p>
            </Link>
            <Link to="https://www.linkedin.com/in/lucasnandan/" target="_blank">
               <img className="w-12" src="images/linkedin-logo.png" alt="linkedin" />
               <p className="mt-2">Linkedin</p>
            </Link>
         </section>
      </main>
   );
}
