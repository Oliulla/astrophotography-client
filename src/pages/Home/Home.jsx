import React, { useEffect, useState } from "react";
import Carousel from "../../components/Header/Carousel";
import axios from "axios";
import HomeServiceCard from "./HomeServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/limitServices").then((res) => {
      setServices(res.data.data);
    });
  }, []);

  console.log(services);

  return (
    <main>
      <Carousel />

      {/* services section */}
      <section className="w-11/12 my-14 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {services.map((service) => {
            return <HomeServiceCard key={service._id} service={service} />
          })}
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
