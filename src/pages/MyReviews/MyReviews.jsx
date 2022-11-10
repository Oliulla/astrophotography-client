import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyEachReview from "../../components/MyEachReview/MyEachReview";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const email  = user?.email;
  const [myReview, setMyReview] = useState([]);
  // const [displayReview, setDisplayReview] = useState(myReview);
  useTitle('myreviews');

  
  useEffect(() => {
    axios
      .get(`https://astrophotography-server-oliulla.vercel.app/reviews?email=${email}`)
      .then((res) => {
        setMyReview(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  const handleReviewDelete = (userDeleteId, servName) => {
    console.log(userDeleteId, servName)
    const isAgree = window.confirm(`Are you sure to delete review for ${servName}`);
    console.log(isAgree);
    if (isAgree) {
      axios
        .delete(`https://astrophotography-server-oliulla.vercel.app/reviews/${userDeleteId}`)
        .then((res) => {
          const remainingReviews = myReview.filter(review => review._id !== userDeleteId);
          setMyReview(remainingReviews);
          toast.success(`successfully deleted review for ${servName}`);
        })
        .catch((err) => {
          toast.warn(err?.message);
        });
    }
  };

  // console.log(displayReview);
  // console.log(myReview);

  return (
    <section className="mb-20 text-4xl flex flex-col items-center mt-10">
      <h2 className="text-center text-white border-b-2">My Reviews</h2>
        <div className="grid md:grid-cols-3 gap-4 justify-center mt-7">
          {myReview?.map((reviewInfo, idx) => {
            return <div>
            <MyEachReview key={reviewInfo._id+idx} reviewInfo={reviewInfo} idx={idx} handleReviewDelete={handleReviewDelete} />
            </div> 
          })}
          <h2 className="text-info">
            {
              !myReview.length && "No review added." 
            }
          </h2>
        </div>
    </section>
  );
};

export default MyReviews;
