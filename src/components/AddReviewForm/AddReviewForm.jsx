// import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddReviewForm = ({ serviceId, servName, handleAddReview }) => {
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  const userEmail = user?.email;
  const userPhotoURL = user?.photoURL;

  // const handleAddReview = (e) => {
  //   e.preventDefault();

  //   const userReview = e.target.review.value;
  //   const ratings = e.target.ratings.value;

  //   axios
  //     .post("https://astrophotography-server-oliulla.vercel.app/reviews", {
  //       userName,
  //       userEmail,
  //       userPhotoURL,
  //       userReview,
  //       ratings,
  //       serviceId,
  //       servName,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="mx-4 md:ml-10 bg-[#1D2A35] px-6 pt-8 pb-20">
      <h3 className="text-xl md:text-4xl font-semibold text-white">
        Add Review
      </h3>
      <form
        onSubmit={(e) => handleAddReview(e, userName, userEmail, userPhotoURL, serviceId, servName)}
        className="grid grid-cols-2 my-6"
      >
        <input
          type="text"
          defaultValue={userName}
          title="you can't change"
          className="input input-bordered w-full text-white"
          readOnly
        />
        <input
          type="number"
          name="ratings"
          title="Give Rating"
          defaultValue="5"
          min="1"
          max="5"
          className="input input-info input-bordered w-24 md:w-40 text-white mx-6"
        />
        <textarea
          className="textarea textarea-info resize-none my-6 row-span-2 h-28 text-white"
          placeholder="your review"
          title="put your valuable message"
          name="review"
          required
        ></textarea>
        <input
          type="email"
          defaultValue={userEmail}
          title="you can't change"
          className="input input-bordered w-10/12 my-6 mx-6 text-white row-span-2"
          readOnly
        />
        <button
          className="btn btn-info hover:bg-blue-700 hover:text-white w-full"
          title="click submit to add review"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
