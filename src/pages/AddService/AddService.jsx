import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle('addservice')

  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const servPrice = form.price.value;
    const servImg = form.photoURL.value;
    const servName = form.serviceName.value;
    const servDesc = form.desc.value;
    const servRating = form.rating.value;

    // console.log(servPrice, servImg, servName, servDesc, servRating);

    axios.post("https://astrophotography-server-oliulla.vercel.app/services", {
      servPrice,
      servImg,
      servName,
      servDesc,
      servRating,
    })
    .then(res => {
        console.log(res);
        toast.success('Service Added Successfully');
        form.reset();
        return;
    })
    .then(err => {
        console.log(err);
        toast.warn(err?.message);
    })
  };

  return (
    <div className="md:ml-10 bg-[#1D2A35] px-6 pt-8 pb-10 w-11/12 md:w-8/12 my-8 mx-auto">
      <h3 className="text-2xl md:text-4xl font-semibold text-white">
        Add Service
      </h3>
      <form
        onSubmit={handleAddService}
        className="grid grid-cols-1 md:grid-cols-2 my-8 gap-4 text-white"
      >
        <input
          name="price"
          type="number"
          placeholder="Service Price"
          className="text-xl input input-bordered input-info w-full max-w-xs"
          min="0"
          required
        />
        <input
          name="photoURL"
          type="url"
          placeholder="Service photoURL"
          className="text-xl input input-bordered input-info w-full max-w-xs"
          required
        />
        <input
          name="serviceName"
          type="text"
          placeholder="Service Name"
          className="text-xl input input-bordered input-info w-full max-w-xs"
          required
        />
        <textarea
          name="desc"
          className="textarea textarea-info text-xl w-full max-w-xs resize-none row-span-2"
          placeholder="Service Description"
          required
        ></textarea>
        <input
          name="rating"
          type="number"
          placeholder="rating"
          className="text-xl input input-bordered input-info w-full max-w-xs"
          min="1"
          max="5"
          required
        />
        <button className="btn btn-info w-full max-w-xs">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
