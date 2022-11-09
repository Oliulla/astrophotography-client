import { StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AddReviewForm from "../AddReviewForm/AddReviewForm";
import AllReviews from "../AllReviews/AllReviews";

const ServiceDetails = () => {
  const { data } = useLoaderData({});
  const { servImg, servName, servDesc, servPrice, servRating, _id } = data;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // get users review
  useEffect(() => {
    axios
      .get(`http://localhost:5000/reviews`)
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(reviews)
  const specificServReviews = reviews.filter(specificRev => specificRev?.serviceId === _id);
  // console.log(specificServReviews);

  return (
    <div className="flex flex-col mt-10 mb-24 md:mx-16">
      <div className="grid md:grid-cols-2 justify-center ">
        <div className="card card-compact w-full bg-black shadow-xl">
          <figure>
            <img src={servImg} alt={servName} className="w-full h-72" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-3xl">{servName}</h2>
            <p className="text-[1rem]">{servDesc}</p>
            <div className="grid grid-cols-2 justify-evenly my-8">
              <p className="text-xl text-red-700">Price: <span className="text-info">${servPrice}</span></p>
              <div>
                <p className="text-xl text-yellow-500">
                  {" "}
                  {servRating}
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          {user?.uid ? (
            <AddReviewForm serviceId={_id} servName={servName} />
          ) : (
            <div>
              <h2 className="text-center text-4xl text-white mt-20">
                Plaease{" "}
                <em>
                  <Link to="/login" className="text-info font-bold underline">
                    Login
                  </Link>
                </em>{" "}
                First To Add Review
              </h2>
            </div>
          )}
          <div>
            <h2 className="text-center text-xl md:text-4xl text-white mt-8">
              Please! <br />
              Scroll Down To Read Others Review
            </h2>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-blue-600 my-10"></div>
      <section className="mb-20 text-4xl">
        <h2 className="text-center text-white border-b-2">All Reviews</h2>
        <div className="grid md:grid-cols-3 justify-center mt-7">
          {specificServReviews?.map((reviewInfo) => {
            return <AllReviews key={reviewInfo._id} reviewInfo={reviewInfo} />;
          })}
        </div>
        {
          !specificServReviews.length && <p className="text-white">No Review for {servName}</p>
        }
      </section>
    </div>
  );
};

export default ServiceDetails;
