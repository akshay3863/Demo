import React from "react";

const Title = ({ name }: any) => {
  return (
    <div className="flex justify-between container items-center my-5">
      <div className="font-bold text-smd ">{name}</div>
      <div className="text-primary">See all</div>
    </div>
  );
};

export default Title;
