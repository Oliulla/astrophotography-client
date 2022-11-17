import React, { useEffect, useState } from "react";
import Carousel from "../../components/Header/Carousel";
import axios from "axios";
import HomeServiceCard from "./HomeServiceCard";
import { Link } from "react-router-dom";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import BgImg from "../../components/BgImg/BgImg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import SpinnerAnimation from "../../components/SpinnerAnimation/SpinnerAnimation";


const Home = () => {
  const [services, setServices] = useState([]);
  const {loading, setLoading} = useContext(AuthContext);
  useTitle('home')
//  console.log(loading);


  useEffect(() => {
    axios
      .get(`https://astrophotography-server.vercel.app/limitServices`)
      .then((res) => {
        setServices(res.data.data);
        // setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Carousel />
      <div>
        {
          !services.length ? <SpinnerAnimation /> : undefined
        }
      </div>
      {/* services section */}
      <section className="w-11/12 my-14 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {services?.map((service) => {
            return <HomeServiceCard key={service._id} service={service} />;
          })}
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <Link to="/services">
            <button className="btn btn-info text-xl hover:bg-blue-800 hover:text-white">
              See All
            </button>
          </Link>
        </div>
      </section>
      {/* devider */}
      <div className="w-full h-[2px] bg-blue-500"></div>
      <section>
        <HomeFeatures />
      </section>
      <section>
          <BgImg />
      </section>
      <section>
        <div className="text-center bg-black py-10">
        <h2 className="text-5xl font-semibold text-info">Get In Touch</h2>
        <div className="my-6 flex justify-center">
          <input className="px-2 py-3 w-60 border outline-none border-blue-500 text-white" type="email" placeholder="email" /> 
          <button className="bg-blue-600 hover:bg-blue-800 py-3 px-4 text-xl font-semibold text-white">Subscribe</button>
        </div>
        </div>
      </section>
      <div className="w-full h-[2px] bg-slate-400"></div>
    </main>
  );
};

export default Home;
