import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import useFetchData from '../../hooks/useFetchData';

function Technologies() {
  const { data, loading, error } = useFetchData('/projects.json'); // Assurez-vous que le chemin est correct

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.projects || !Array.isArray(data.projects)) {
    return <div>No data found</div>;
  }

  // Création du tableau d'objets avec des identifiants pour les technologies
  const stacks = data.projects.flatMap((project, projectIndex) => 
    project.technologies.map((tech, techIndex) => ({
      id: `${projectIndex + 1}-${techIndex + 1}`, // Utilisez une combinaison d'index pour un ID unique
      name: tech.name,
      image: `image/${tech.image}`
    }))
  );

  console.log(stacks);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={stacks} />
    </div>
  );
}

export default Technologies;
