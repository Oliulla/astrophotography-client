import React, { useEffect, useState } from "react";
import Carousel from "../../components/Header/Carousel";
import axios from "axios";
import HomeServiceCard from "./HomeServiceCard";
import { Link } from "react-router-dom";



const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://astrophotography-server.vercel.app/limitServices")
      .then((res) => {
        setServices(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Carousel />
      {/* services section */}
      <section className="w-11/12 my-14 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {services.map((service) => {
            return <HomeServiceCard key={service._id} service={service} />;
          })}
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <Link to="/services">
            <button className="btn btn-info text-xl hover:bg-blue-800 hover:text-white">See All</button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Other meaningfull section</h2>
      </section>
      <section>
        <h3>Photography skills section</h3>
      </section>
      <section>
        <h2>Get in touch section</h2>
      </section>
    </main>
  );
};

export default Home;
