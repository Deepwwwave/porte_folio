import React, { useState } from "react";
import styles from "../styles/CardProject.module.css";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";

const CardProject = ({ project }) => {
   const [toggleDetails, setToggleDetails] = useState(false);
   const [isButtonClicked, setIsButtonClicked] = useState(false);

   const buttonClasse = classNames(styles.cardProject_button, { [styles.cardProject_buttonClicked]: isButtonClicked });

   const handleIsButtonClicked = () => {
      setIsButtonClicked(!isButtonClicked);
   };

   const handleToggleDetails = () => {
      setToggleDetails(!toggleDetails);
   };

   const infoAnimation = useSpring({
      opacity: toggleDetails ? 1 : 0,
      transform: toggleDetails ? "translateY(0)" : "translateY(-20px)",
      config: { tension: 170, friction: 26 },
   });

   return (
      <div className={styles.cardProject_layout}>
         <h2 className="text-center mb-2 mt-2 uppercase">{project.name}</h2>
         <img src={`images/${project.thumbnail}`} alt={project.name} className={`lg:w-2/4 rounded my-5`} />
         <button
            className={buttonClasse}
            onClick={() => {
               handleToggleDetails(), handleIsButtonClicked();
            }}
         >
            Détails
         </button>
         <animated.div style={infoAnimation}>
            <AnimatePresence>
               {toggleDetails && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                     <>
                        <p className="ml-9 mt-5 italic mr-9 text-wrap">{project.summary}</p>
                        <p className="ml-9 mt-5 underline">Stack:</p>
                        <ul className="flex justify-start gap-4 flex-wrap px-9 pb-9 pt-4">
                           {project.technologies.map((tech) => (
                              <li key={tech.name} className="flex flex-col items-center">
                                 <img src={`images/${tech.image}`} alt={tech.name} className="w-10" />
                                 {tech.name}
                              </li>
                           ))}
                        </ul>
                        {project.description.Front && (
                           <div>
                              <h3 className="ml-9 underline">Front-end:</h3>
                              {project.description.Front.map((detail) => (
                                 <p className="ml-9 mr-9 text-wrap" key={detail.title}>
                                    <strong>{detail.title}: </strong> {detail.value}
                                 </p>
                              ))}
                           </div>
                        )}
                        {project.description.Back && (
                           <div>
                              <h3 className="ml-9 mt-9 underline">Back-end:</h3>
                              {project.description.Back.map((detail) => (
                                 <p className="ml-9 mr-9 text-wrap" key={detail.title}>
                                    <strong>{detail.title}: </strong> {detail.value}
                                 </p>
                              ))}
                           </div>
                        )}
                        {project.description["API Request"] && (
                           <div>
                              <h3 className="ml-9 mt-9 underline">API Request:</h3>
                              {project.description["API Request"].map((detail) => (
                                 <p className="ml-9 text-wrap" key={detail.title}>
                                    <strong>{detail.title}: </strong> {detail.value}
                                 </p>
                              ))}
                           </div>
                        )}
                        <button
                           className={` ${styles.cardProject_buttonClose} rounded-md text-base ml-9 mt-9`}
                           onClick={() => {
                              handleToggleDetails(), handleIsButtonClicked();
                           }}
                        >
                           X
                        </button>
                     </>
                  </motion.div>
               )}
            </AnimatePresence>
         </animated.div>
      </div>
   );
};

export default CardProject;
