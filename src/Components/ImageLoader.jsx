import React, { useState } from "react";

const ImageLoader = ({ src, alt, className }) => {
   const [loaded, setLoaded] = useState(false);

   return (
      <div className="relative">
         {!loaded && (
            <>
               {/* Ceci est votre squelette, vous pouvez le styliser comme vous le souhaitez */}
               <div className=" rounded-md p-4 max-w-sm w-full mx-auto my-6 h-44 bg-gray-100"></div>
            </>
         )}
         <img src={src} alt={alt} className={`${className} ${loaded ? "block" : "hidden"}`} onLoad={() => setLoaded(true)} />
      </div>
   );
};

export default ImageLoader;
