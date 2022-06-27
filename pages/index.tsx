import React from "react";
import Bottom from "../components/Bottom";
import CategoriesCard from "../components/CategoriesCard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RestaurantsCard from "../components/RestaurantsCard";
import Title from "../components/Title";
const index = () => {
  return (
    <div className="relative h-screen">
      <Header />
      <h1 className="container mt-5 font-bold text-lg w-2/4 lg:w-full text-left">
        Where do you want to go?
      </h1>
      <Hero />
      <Title name="Categories"/>
      <CategoriesCard/>
      <Title name="Most Popular Restaurants"/>
      <RestaurantsCard/>
      <Bottom />
    </div>
  );
};

export default index;
