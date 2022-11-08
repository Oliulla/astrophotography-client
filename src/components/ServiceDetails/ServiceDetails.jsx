import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData({});
  console.log(data);
  const { servImg, servName, servDesc, servPrice, servRating } = data;

  return (
    <div className="flex flex-col items-center my-24">
      <section className="card card-compact w-10/12 md:w-6/12 bg-black shadow-xl">
        <figure>
          <img src={servImg} alt={servName} className="w-full h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{servName}</h2>
          <p>{servDesc}</p>
          <div className="grid grid-cols-2 justify-evenly my-8">
            <p className="text-xl text-red-700">Price: {servPrice}</p>
            <p className="text-xl text-yellow-500">Rating: {servRating}</p>
          </div>
        </div>
      </section>
      <section>
        <h2>User Reviews section</h2>
      </section>
    </div>
  );
};

export default ServiceDetails;
