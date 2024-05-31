import React from "react";
import classNames from "classnames";
import styles from "../../styles/button.module.css"
import { useState } from "react";

export default function Button({content}) {
   const [isButtonActivated, setIsButtonActivated] = useState('');

   const handleIsButtonActivated = () => {
      setIsButtonActivated(!isButtonActivated);
   };

   const buttonClasses = classNames(styles.ui_button, { [styles.ui_buttonClicked]: isButtonClicked });

   return (
      <div onClick={handleIsButtonActivated} className={buttonClasses}>
         {content}
      </div>
   );
}
