import React from "react";
import SelectInput from "../select/SelectInput.js";
import { logo } from "../../img/index.js";
import InfoCard from "../InfoCard/InfoCard.js";

const Classes = () => {
  return (
    <section className="w-full  md:w-full">
      <div className=" container mx-auto flex flex-col justify-center items-center md:flex md:flex-shrink-0 xmb:px-3">
        <div className="h-10 mt-7">
          <img src={logo} alt="logo" className="h-full" />
        </div>
        <div>
          <h1 className="text-4xl mt-5 mr-12 tracking-wider text-white font-semibold ">
            Classes
          </h1>
        </div>
        <div className=" w-full">
          <SelectInput />
        </div>
        <div className="w-full h-full">
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default Classes;
