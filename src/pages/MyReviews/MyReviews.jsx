import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyEachReview from "../../components/MyEachReview/MyEachReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const email  = user?.email;
  const [myReview, setMyReview] = useState([]);

  console.log(myReview);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/reviews?email=${email}`)
      .then((res) => {
        setMyReview(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  return (
    <section className="mb-20 text-4xl flex flex-col items-center mt-10">
      <h2 className="text-center text-white border-b-2">My Reviews</h2>
        <div className="grid md:grid-cols-3 gap-4 justify-center mt-7">
          {myReview?.map((reviewInfo, idx) => {
            return <>
            <MyEachReview key={idx} reviewInfo={reviewInfo} />
            </> 
          })}
        </div>
    </section>
  );
};

export default MyReviews;
