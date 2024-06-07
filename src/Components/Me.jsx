import React from "react";
import { ReactTyped } from 'react-typed';
import styles from "../styles/Me.module.css";

export default function Me() {
   return (
      <div className="text-start p-12 font-sans">
      <div className="text-2xl font-bold">
        <ReactTyped
          strings={['Lucas Nandan']}
          typeSpeed={40}
          backSpeed={50}
          
        />
      </div>
      <div className="mt-5 text-lg">
        <ReactTyped
          strings={[
            'Je recherche un poste de développeur web où je peux continuer à développer des solutions innovantes et évolutives.',
            'Je suis également ouvert à des contrats de professionnalisation pour approfondir mes compétences.'
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
      <div className="mt-5 text-base italic">
        <ReactTyped
          strings={[
            '"La simplicité est la sophistication suprême." – Léonard de Vinci',
            '"Le succès est la somme de petits efforts répétés jour après jour." – Robert Collier',
            '"Ceux qui savent beaucoup se rendent compte de leur ignorance, tandis que ceux qui en savent peu sont sûrs de tout savoir." – Bertrand Russell'
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

