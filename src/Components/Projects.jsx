import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import useFetchData from "../hooks/useFetchData";
import CardProject from "./CardProject";
import LoadingCircle from "./ui/loading-circle";

function Projects() {
   const { data, loading, error } = useFetchData("/projects.json"); // Assurez-vous que le chemin est correct
   const [showLoading, setShowLoading] = useState(true);
   const animationDuration = 1200; // Durée de l'animation en millisecondes
   const backgroundClasses = ["bg-gray-900", "bg-gray-800"];
   const imageStyles = ["sepia-0"];

   useEffect(() => {
      if (!loading) {
         // Set a timeout to wait for the LoadingCircle animation to complete
         const timer = setTimeout(() => {
            setShowLoading(false);
         }, animationDuration);

         return () => clearTimeout(timer); // Cleanup the timer on unmount
      }
   }, [loading]);

   if (loading || showLoading) {
      return <LoadingCircle />;
   }

   if (error) {
      return <div>Error: {error.message}</div>;
   }

   if (!data || !data.projects || !Array.isArray(data.projects)) {
      return <div>No data found</div>;
   }

   return (
      <div className={` ${styles.projects_layout} rounded lg:w-4/5 xl:ml-20 xl:mt-0 2xl:w-3/4 transition-opacity`}>
         <h1 className=" text-2xl whitespace-normal break-after-column uppercase text-5xl">Projets</h1>
         <div className="h-2 bg-gray-700 mb-6 lg:my-4 rounded lg:w-5/6"></div>
         {data.projects.map((project, index) => {
            // Détermine la classe de background
            const bgColorClass = backgroundClasses[index % backgroundClasses.length];
            // Détermine le style d'image
            const bgImageColorClass = imageStyles[index % imageStyles.length];

            return (
               <CardProject 
                  key={project.name} 
                  project={project} 
                  bgColor={bgColorClass} 
                  bgImageColor={bgImageColorClass} 
               />
            );
         })}
      </div>
   );
}

export default Projects;
