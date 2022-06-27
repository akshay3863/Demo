import React from "react";

const Bottom = () => {
  return (
    <>
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-5 z-10 bg-white container drop-shadow-xl rounded-xl py-3 "
      >
        <div id="tabs" className="flex justify-between">
          <a
            href="#"
            className="flex w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <img src="img/Home.svg" />
          </a>
          <a
            href="#"
            className="flex w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <img src="img/search_icon.svg" />
          </a>
          <a
            href="#"
            className="flex w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <img src="img/Navigation Bar Icon.svg" />
          </a>
          <a
            href="#"
            className=" flex w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <img src="img/profile_icon.svg" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Bottom;
