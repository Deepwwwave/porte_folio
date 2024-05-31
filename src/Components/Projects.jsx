import {React, useState, useEffect} from "react";
import styles from "../styles/Projects.module.css";
import useFetchData from "../hooks/useFetchData";
import CardProject from "./CardProject";
import LoadingCircle from "./ui/loading-circle";

function Projects() {
   const { data, loading, error } = useFetchData("/projects.json"); // Assurez-vous que le chemin est correct
//    const [showLoading, setShowLoading] = useState(true);
//    const animationDuration = 500; // Durée de l'animation en millisecondes

//    useEffect(() => {
//       if (!loading) {
//         // Set a timeout to wait for the LoadingCircle animation to complete
//         const timer = setTimeout(() => {
//           setShowLoading(false);
//         }, animationDuration);
  
//         return () => clearTimeout(timer); // Cleanup the timer on unmount
//       }
//     }, [loading]);

   
   // if (loading || showLoading) {
   //    return <LoadingCircle/>;
   // }
   if (loading ) {
      return <>Loading...</>;
   }

   if (error) {
      return <div>Error: {error.message}</div>;
   }

   if (!data || !data.projects || !Array.isArray(data.projects)) {
      return <div>No data found</div>;
   }

   return (
      <div className={` rounded lg:w-4/5 ${styles.projects_layout}`}>
         <h1 className="text-2xl whitespace-normal break-after-column uppercase">Projets</h1>
         <div className="h-2 bg-slate-300 mb-6 lg:my-4 rounded lg:w-5/6"></div>
         {data.projects.map((project) => (
            <CardProject key={project.name} project={project} />
         ))}
      </div>
   );
}

export default Projects;
