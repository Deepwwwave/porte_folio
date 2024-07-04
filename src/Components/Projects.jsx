import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import useFetchData from "../hooks/useFetchData";
import CardProject from "./CardProject";
import LoadingCircle from "./ui/loading-circle";

function Projects() {
   const { data, loading, error } = useFetchData("/projects.json"); // Assurez-vous que le chemin est correct
   const [showLoading, setShowLoading] = useState(true);
   const animationDuration = 1400; // Durée de l'animation en millisecondes
   const backgroundClasses = ["bg-slate-800", "bg-slate-600"];

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
      return <div>Error: {error.message}</div>
   }

   if (!data || !data.projects || !Array.isArray(data.projects)) {
      return <div>No data found</div>;
   }

   return (
      <div className={` ${styles.projects_layout} lg:rounded lg:w-3/4 xl:ml-10  xl:pr-32 2xl:w-3/4 bg-transparent `}>
         <h1 className=" text-4xl xl:text-5xl  whitespace-normal break-after-column text-white uppercase">Projets</h1>
         <div className="h-2 bg-white my-4 lg:w-5/6"></div>
         {data.projects.map((project, index) => {
            // Détermine la classe de background
            const bgColorClass = backgroundClasses[index % backgroundClasses.length];

            return <CardProject key={project.name} project={project} bgColor={bgColorClass} />;
         })}
      </div>
   );
}

export default Projects;
