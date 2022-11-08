import React from "react";

const HomeServiceCard = ({service}) => {
    const {servImg, servName, servDesc, _id} = service;
  return (
    <div className="card card-compact w-96 bg-indigo-800 shadow-xl">
      <figure>
        <img src={servImg} alt={servName} className="w-full h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{servName}</h2>
        <p>
            {
                servDesc.length > 100 ? `${servDesc.slice(0, 100)}...` : servDesc
            }
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-info">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
