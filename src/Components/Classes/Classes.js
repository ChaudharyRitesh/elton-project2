import React from "react";
import SelectInput from "../select/SelectInput.js";
import { logo } from "../../img/index.js";
import IndfoCard from "../InfoCard/IndfoCard.js";

const Classes = () => {
  return (
    <section className="w-full  md:w-full">
      <div className=" h-screen container mx-auto flex flex-col justify-center items-center md:flex md:flex-shrink-0">
        <div className="h-10 mt-7">
          <img src={logo} alt="logo" className="h-full" />
        </div>
        <div>
          <h1 className="text-4xl mt-5 mr-12 tracking-wider text-white font-normal ">
            Classes
          </h1>
        </div>
        <div className=" w-full">
          <SelectInput />
        </div>
        <div className="w-full h-full">
          <IndfoCard />
        </div>
      </div>
    </section>
  );
};

export default Classes;
