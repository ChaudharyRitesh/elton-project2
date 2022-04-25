import React from "react";

const SelectInput = () => {
  return (
    <div className="form-group grid gap-4 grid-cols-4 mt-3 text-white px-10 xsmb:p-1 xmb:p-2 xsmb:grid xsmb:grid-cols-1 xsmb:gap-2 xmb:grid xmb:grid-cols-1  mb:grid mb:grid-cols-1 mb:p-5 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-4 ">
      <div>
        <label htmlFor="select" className="xsmb:font-sm">
          Select Location
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full mt-2 p-2 xsmb:p-1 xsmb:text-[10] dark:bg-zinc-800 dark:placeholder-zinc-800 dark:text-white active-none focus-none "
        >
          <option>Harris Park</option>
          <option>Menlo Park</option>
          <option>Ney York</option>
          <option>Manhattan</option>
        </select>
      </div>
      <div>
        <label htmlFor="select">Select Location</label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full mt-2 p-2 xsmb:p-1 xsmb:text-[10] dark:bg-zinc-800 dark:placeholder-zinc-800 dark:text-white active-none focus-none "
        >
          <option>Harris Park</option>
          <option>Menlo Park</option>
          <option>Ney York</option>
          <option>Manhattan</option>
        </select>
      </div>
      <div>
        <label htmlFor="select">Select Location</label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full mt-2 p-2 xsmb:p-1 xsmb:text-[10] dark:bg-zinc-800 dark:placeholder-zinc-800 dark:text-white active-none focus-none "
        >
          <option>Harris Park</option>
          <option>Menlo Park</option>
          <option>Ney York</option>
          <option>Manhattan</option>
        </select>
      </div>
      <div>
        <label htmlFor="select">Select Location</label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full mt-2 p-2 xsmb:p-1 xsmb:text-[10] dark:bg-zinc-800 dark:placeholder-zinc-800 dark:text-white active-none focus-none "
        >
          <option>Harris Park</option>
          <option>Menlo Park</option>
          <option>Ney York</option>
          <option>Manhattan</option>
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
