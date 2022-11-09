import React from "react";
import lunarEclipse from "../../assets/img/lunarEclipse.jpg";
import fullMoon from "../../assets/img/fullMoon.jpg";


const HomeFeatures = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 py-6 md:py-10 px-4 mx-auto w-full bg-[#191A2C] text-white">
        <div>
          <img src={lunarEclipse} alt="full moon" />
        </div>
        <div>
          <h2 className="text-info text-4xl">
            Photograph the Total Lunar Eclipse
          </h2>
          <p className="my-3 text-secondary">November 4, 2022 | Tutorials | 7 Comments</p>
          <p className="my-3">
            Are you hoping to capture a photo of the upcoming total lunar
            eclipse on November 8th? If so, you are not alone. Amateur
            photographers and astrophotography enthusiasts around the world will
            do their best to take pictures of the upcoming lunar eclipse using a
            wide variety of camera equipment.
          </p>
          <p className="my-3">
            A total eclipse of the moon is a truly breathtaking astronomical
            event that anyone can appreciate. The best part about it is that you
            do not need expensive astrophotography equipment or special filters
            to take a great picture of the total lunar eclipse. It's all about
            using the best settings on the camera you are using (even if it's a
            phone).
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center md:gap-10 px-10 py-16 w-full bg-black">
        <div className="text-white">
          <h2 className="text-3xl md:text-5xl font-semibold">Take a Tour</h2>
          <p className="text-xl md:text-3xl py-3">
            Astrophotography offers plenty of features especially <br />{" "}
            designed with astrophotography in mind.
          </p>
          <button className="btn btn-outline btn-info">Explore Features</button>
        </div>
        <div className="">
          <img src={fullMoon} alt="full moon" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
