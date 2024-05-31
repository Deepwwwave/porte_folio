import React from "react";
import styles from "../styles/Projects.module.css";
import useFetchData from "../hooks/useFetchData";
import CardProject from "./CardProject";

function Projects() {
   const { data, loading, error } = useFetchData("/projects.json"); // Assurez-vous que le chemin est correct
   
   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error.message}</div>;
   }

   if (!data || !data.projects || !Array.isArray(data.projects)) {
      return <div>No data found</div>;
   }

   return (
      <div className={` rounded ${styles.projects_layout}`}>
         <h1 className="text-2xl whitespace-normal break-after-column uppercase">Projets</h1>
         <div className="h-2 bg-slate-300 mb-4 rounded"></div>
         {data.projects.map((project) => (
            <CardProject key={project.name} project={project} />
         ))}
      </div>
   );
}

export default Projects;
