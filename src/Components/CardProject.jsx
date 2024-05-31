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
      <section className={`lg:w-5/6 lg:p-0 ${styles.cardProject_layout}`}>
         <span className="lg:w-32 lg:ml-8">
            <h2 className="text-center mb-2 mt-2 uppercase">{project.name}</h2>
         </span>
         <img src={`images/${project.thumbnail}`} alt={project.name} className={`lg:w-2/4 rounded my-5`} />
         <button
            className={`${buttonClasse} lg:mr-8`}
            onClick={() => {
               handleToggleDetails(), handleIsButtonClicked();
            }}
         >
            Détails
         </button>
         <AnimatePresence>
            {toggleDetails && (
               <animated.div style={infoAnimation}>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                     <article className="lg:ml-28 lg:text-start pr-20 pl-9 lg:pl-16 ">
                        <p className=" mt-5 italic text-wrap">{project.summary}</p>
                        <p className=" mt-5 underline">Stack:</p>
                        <ul className="flex justify-start gap-4 flex-wrap pb-9 pt-4">
                           {project.technologies.map((tech) => (
                              <li key={tech.name} className="flex flex-col items-center">
                                 <img src={`images/${tech.image}`} alt={tech.name} className="w-10" />
                                 {tech.name}
                              </li>
                           ))}
                        </ul>
                        {project.description.Front && (
                           <div>
                              <h3 className=" underline">Front-end:</h3>
                              {project.description.Front.map((detail) => (
                                 <p className=" text-wrap" key={detail.title}>
                                    <strong>{detail.title}: </strong> {detail.value}
                                 </p>
                              ))}
                           </div>
                        )}
                        {project.description.Back && (
                           <div>
                              <h3 className=" mt-9 underline">Back-end:</h3>
                              {project.description.Back.map((detail) => (
                                 <p className="  text-wrap" key={detail.title}>
                                    <strong>{detail.title}: </strong> {detail.value}
                                 </p>
                              ))}
                           </div>
                        )}
                        {project.description["API Request"] && (
                           <div>
                              <h3 className="mt-9 underline">API Request:</h3>
                              {project.description["API Request"].map((detail) => (
                                 <p className=" text-wrap" key={detail.title}>
                                    <strong>{detail.title}: </strong> {detail.value}
                                 </p>
                              ))}
                           </div>
                        )}
                        <button
                           className={` ${styles.cardProject_buttonClose} rounded-3xl text-base  mt-9 lg:mb-4`}
                           onClick={() => {
                              handleToggleDetails(), handleIsButtonClicked();
                           }}
                        >
                           X
                        </button>
                     </article>
                  </motion.div>
               </animated.div>
            )}
         </AnimatePresence>
      </section>
   );
};

export default CardProject;
