import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import useFetchData from "../hooks/useFetchData"; // Adjust the path as needed
import styles from "../styles/Profil.module.css"

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
      <main className={`flex flex-col items-center ${styles.profil_layout} `}>
         <h1 className="text-4xl mt-10 mb-3">Lucas Nandan</h1>
         <div>
            <ReactTyped strings={["Developpeur web fullstack"]} typeSpeed={100} backSpeed={100} className="text-2xl"/>
         </div>
         <div className="">
            <h2 className="text-xl mt-16 p-1 mb-8 text-center rounded-md bg-cyan-500 text-slate-800 w-40">Compétences</h2>
         </div>
         <TechnologyImages url={url} exceptions={exceptions} />
         <p className="italic m-8 text-center  whitespace-pre-wrap ">
         " Je suis Lucas Nandan, un développeur web passionné . À 36 ans, j'ai accumulé une variété d'expériences, allant de la conception d'un e-commerce pour la vente à des rôles en support technique pour le Crédit Agricole. J'ai également travaillé comme auto-entrepreneur en infographie et donné des cours de soutien en mathématiques. Mes compétences techniques incluent JavaScript, React, Node.js, Express.js, MySQL, Linux, NGINX, Vercel, HTML, CSS et jQuery. Actuellement, je vis à la ferme, où je profite de la nature, apprends la guitare et me passionne pour le développement de solutions web innovantes.<br/> Je suis à la recherche d'un poste de développeur web ou d'un contrat de professionnalisation pour approfondir mes compétences. "
         </p>
         <h3 className="w-24 border-2 rounded-md text-center p-1 border-cyan-500">Sociale</h3>
      </main>
   );
}
