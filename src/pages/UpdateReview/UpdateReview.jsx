import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  console.log(review.data);
//   const [newReview, setNewReview] = useState(review);

  const handleUpdateReview = (e) => {
    e.preventDefault();

    // console.log(e.target.review.value);
    const userReview = e.target.review.value;
    // review.data.userReview = updateDesc;
    // console.log("update rev", review);
    // setNewReview()
    
    axios
      .put(`http://localhost:5000/reviews/${review.data._id}`, {
        userReview,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center my-20">
      <h2 className="text-white text-xl md:text-3xl my-4">
        Update Your Review
      </h2>
      <form onSubmit={handleUpdateReview}>
        <textarea
          name="review"
          className="textarea textarea-info resize-none w-5/6 md:w-2/6 text-white text-xl"
          placeholder="update review"
          required
        ></textarea>
        <button className="btn btn-info block mx-auto w-40">Update</button>
      </form>
    </div>
  );
};

export default UpdateReview;
