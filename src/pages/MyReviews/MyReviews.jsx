import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyEachReview from "../../components/MyEachReview/MyEachReview";
import SpinnerAnimation from "../../components/SpinnerAnimation/SpinnerAnimation";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  const { user, setLoading, logOut } = useContext(AuthContext);
  const email = user?.email;
  const [myReview, setMyReview] = useState([]);
  useTitle("myreviews");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/reviews?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("astro-token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        setMyReview(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email, logOut]);

  const handleReviewDelete = (userDeleteId, servName) => {
    console.log(userDeleteId, servName);
    const isAgree = window.confirm(
      `Are you sure to delete review for ${servName}`
    );

    // delete user review
    if (isAgree) {
      axios
        .delete(
          `process.env.REACT_APP_API_SERVER/reviews/${userDeleteId}`
        )
        .then((res) => {
          const remainingReviews = myReview.filter(
            (review) => review._id !== userDeleteId
          );
          setMyReview(remainingReviews);
          toast.success(`successfully deleted review for ${servName}`);
        })
        .catch((err) => {
          toast.warn(err?.message);
        });
    }
  };

  return (
    <section className="mb-20 text-4xl flex flex-col items-center mt-10">
      <h2 className="text-center text-white border-b-2">My Reviews</h2>
      {/* {
          !myReview.length ? <SpinnerAnimation /> : undefined
        } */}
      <div className="grid md:grid-cols-3 gap-4 justify-center mt-7">
        {myReview?.map((reviewInfo, idx) => {
          return (
            <div>
              <MyEachReview
                key={reviewInfo._id + idx}
                reviewInfo={reviewInfo}
                idx={idx}
                handleReviewDelete={handleReviewDelete}
              />
            </div>
          );
        })}
        <h2 className="text-info">{!myReview.length && "No review added."}</h2>
      </div>
    </section>
  );
};

export default MyReviews;
