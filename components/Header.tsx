import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between container items-center mt-5">
      <div className="flex items-center">
        <img alt="Img" src="img/Avatar.png" className="w-10 h-10 object-cover mr-2"/>
        <h2>Hi, AKshay Solanki</h2>
      </div>
      <div>
        <img alt="Img" src="img/notification_icon.png" />
      </div>
    </div>
  );
};

export default Header;
