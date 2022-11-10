import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomeServiceCard = ({ service }) => {
  const { servImg, servName, servDesc, servPrice, servRating, _id } = service;
  
  return (
    <div className="card card-compact w-96 bg-black shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={servImg}>
            <img src={servImg} className="w-full h-40 object-cover cursor-pointer" title={servName} alt={servName} />
          </PhotoView>
        </PhotoProvider>
        
        {/* <img src={servImg} alt={servName} className="w-full h-40" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{servName}</h2>
        <p title="click view details to read more">
          {servDesc.length > 100 ? `${servDesc.slice(0, 100)}...` : servDesc}
        </p>
        <p className="md:text-xl text-red-700">
          Price:
          <span className="text-info px-1"><span>$</span>{servPrice}</span>
        </p>
        <div>
          <p className="text-xl text-yellow-500">
            <span>{servRating}</span>
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
            <StarIcon className="w-4 h-4 inline" />
          </p>
        </div>

        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-outline btn-info">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
