import { StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import AddReviewForm from "../AddReviewForm/AddReviewForm";
import AllReviews from "../AllReviews/AllReviews";
import { useQuery } from "@tanstack/react-query";
import SpinnerAnimation from "../SpinnerAnimation/SpinnerAnimation";

const ServiceDetails = () => {
  const { data } = useLoaderData({});
  const { servImg, servName, servDesc, servPrice, servRating, _id } = data;
  const { user } = useContext(AuthContext);
  // const [reviews, setReviews] = useState([]);
  const [specificServReviews, setSpecificServReviews] = useState([]);
  useTitle("service-details");

  const {
    data: reviews = [],
    refetch,
  } = useQuery({
    queryKey: ["allreviews"],
    queryFn: async () => {
      const res = await fetch("https://astrophotography-server.vercel.app/allreviews");
      const data = await res.json();
      return data.data;
    },
  });

  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  // // get users review
  // useEffect(() => {
  //   axios
  //     .get(`process.env.REACT_APP_API_SERVER/allreviews`)
  //     .then((res) => {
  //       setReviews(res.data.data);
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    // console.log("inside useEffect", reviews);
    // get reviews depends on user
    const newSpecificServReviews = reviews.filter(
      (specificRev) => specificRev?.serviceId === _id
    );
    // console.log(newSpecificServReviews);
    setSpecificServReviews(newSpecificServReviews);
  }, [reviews, _id]);

  // useEffect(() => {
  //   // get reviews depends on user
  //   const newSpecificServReviews = reviews?.data.filter(
  //     (specificRev) => specificRev?.serviceId === _id
  //   );
  //   setSpecificServReviews(newSpecificServReviews);

  // }, [_id, reviews?.data]);

  // if (isLoading){
  //   return <SpinnerAnimation />
  // }

  // if (error) {
  //   toast.warn(error.message)
  // }

  // post user review to db
  const handleAddReview = (
    e,
    userName,
    userEmail,
    userPhotoURL,
    serviceId,
    servName
  ) => {
    e.preventDefault();

    const date = new Date();
    const submitTime = date.getTime();

    const userReview = e.target.review.value;
    const ratings = e.target.ratings.value;
    console.log();
    axios
      .post("https://astrophotography-server.vercel.app/reviews", {
        userName,
        userEmail,
        userPhotoURL,
        userReview,
        ratings,
        serviceId,
        servName,
        submitTime,
      })
      .then((response) => {
        console.log(response);
        const newReviews = response.data;
        // // setReviews([...reviews, newReviews]);
        // const newSpecificServReviews = reviews?.data.filter(
        //   (specificRev) => specificRev?.serviceId === _id
        // );
        // console.log(newSpecificServReviews);
        // setSpecificServReviews(newSpecificServReviews);
        refetch();

        toast.success("Review added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col mt-10 mb-24 md:mx-16">
      <div className="grid md:grid-cols-2 justify-center ">
        <div className="card card-compact w-full bg-black shadow-xl">
          <figure>
            <img
              src={servImg}
              alt={servName}
              className="w-full h-72 hero-overlay"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-3xl">{servName}</h2>
            <p className="text-[1rem]">{servDesc}</p>
            <div className="grid grid-cols-2 justify-evenly my-8">
              <p className="text-xl text-red-700">
                Price: <span className="text-info">${servPrice}</span>
              </p>
              <div>
                <p className="text-xl text-yellow-500">
                  
                  {
                    [...Array(parseInt(servRating))].map((a, i) => {
                      return <StarIcon key={i} className="w-4 h-4 inline" />
                    })
                  }
                  {/* <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" />
                  <StarIcon className="w-4 h-4 inline" /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          {user?.uid ? (
            <AddReviewForm
              serviceId={_id}
              servName={servName}
              handleAddReview={handleAddReview}
            />
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
        <div className="grid md:grid-cols-3 justify-center mt-7 gap-6">
          {/* {specificReviews.map((reviewInfo) => 
            console.log(reviewInfo)
          )} */}
          {specificServReviews?.map((reviewInfo) => {
            return <AllReviews key={reviewInfo._id} reviewInfo={reviewInfo} />;
          })}
        </div>
        {!specificServReviews.length && (
          <p className="text-white">No Review for {servName}</p>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
