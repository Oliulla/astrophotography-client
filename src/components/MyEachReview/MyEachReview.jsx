import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const MyEachReview = ({ reviewInfo }) => {
  const { userName, userPhotoURL, ratings, userReview } = reviewInfo;
  console.log(reviewInfo)
  return (
    <div className="card w-96 bg-black shadow-xl mt-6 md:mt-0">
      <div className="card-body text-white">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full"
              src={userPhotoURL}
              alt={userName}
            />
            <h2 className="card-title mx-2">{userName}</h2>
          </div>
          <div title={`${userName} gave ${ratings} star`}>
            <p className="text-xl text-yellow-500">
              <span>{ratings}</span>
              <StarIcon className="w-4 h-4 inline" />
              <StarIcon className="w-4 h-4 inline" />
              <StarIcon className="w-4 h-4 inline" />
              <StarIcon className="w-4 h-4 inline" />
              <StarIcon className="w-4 h-4 inline" />
            </p>
          </div>
        </div>
        <p className="text-[1.1rem] mt-4">{userReview}</p>
      </div>
      <div className="flex justify-start gap-5 mx-4 py-6">
      <button className="btn btn-outline btn-error">Delete Review</button>
      <button className="btn btn-outline btn-info">Edit Review</button>
      </div>
    </div>
  );
};

export default MyEachReview;
