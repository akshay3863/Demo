import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 bg-primary p-5 rounded-xl relative h-44">
      <img
        src="img/Illustration.png"
        alt="banner"
        className="absolute banner max-h-50"
      />
      <div className="z-50 w-10/12  absolute bottom-3.5">
        <img src="img/search_icon.png" className="absolute left-2.5 top-2"/>
        <input className="input w-full p-2 rounded-xl" />
      </div>
      <style jsx>
        {`
          .banner {
            top: -25px;
            left: -2px;
            
          }
        
        `}
      </style>
    </div>
  );
};

export default Hero;
