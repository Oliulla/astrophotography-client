import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData({});
  const { servImg, servName, servDesc, servPrice, servRating } = data;

  return (
    <div className="flex flex-col items-center mt-10 mb-24">
      <section className="card card-compact w-10/12 md:w-6/12 bg-black shadow-xl">
        <figure>
          <img src={servImg} alt={servName} className="w-full h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{servName}</h2>
          <p>{servDesc}</p>
          <div className="grid grid-cols-2 justify-evenly my-8">
            <p className="text-xl text-red-700">Price: {servPrice}</p>
            <div>
            <p className="text-xl text-yellow-500"> {servRating}
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[2px] w-full bg-blue-600 my-10"></div> 
      <section className="mb-20 text-4xl">
        <h2>User Reviews section</h2>
      </section>
    </div>
  );
};

export default ServiceDetails;
