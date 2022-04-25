import React from "react";
import SelectInput from "../select/SelectInput.js";
import { logo } from "../../img/index.js";

const Classes = () => {
  return (
    <section className="w-full h-screen bg-zinc-800 md:w-full">
      <div className="container mx-auto flex flex-col justify-center items-center">
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
        <div className="cards"></div>
      </div>
    </section>
  );
};

export default Classes;
