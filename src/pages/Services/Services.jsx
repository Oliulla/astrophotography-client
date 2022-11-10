import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SpinnerAnimation from "../../components/SpinnerAnimation/SpinnerAnimation";
import useTitle from "../../hooks/useTitle";
import HomeServiceCard from "../Home/HomeServiceCard";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  const {loading, setLoading} = useContext(AuthContext);
  useTitle('services');
  console.log(loading)

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setAllServices(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(allServices);

  return (
    <div className="w-11/12 my-14 mx-auto">
      {
        !allServices.length ? <SpinnerAnimation /> : undefined
      }
      <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
        {allServices.map((service) => {
          return <HomeServiceCard key={service._id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
