import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  useTitle("register");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    // const userInfo = {name, email, photoURL, password}
    // console.log(userInfo);

    createUser(email, password)
      .then((result) => {
        const currentUser = {
          email: email
        };
        // update user profile
        updateUserProfile(name, photoURL)
          .then((result) => {
            // const user = result.user;
          })
          .catch((err) => {
            toast.warn(err.message);
          });


        // get jwt token
        fetch(`https://astrophotography-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("astro-token", data.token);

            navigate(from, { replace: true });

            toast.success("Successfully registered!", {
              position: toast.POSITION.TOP_CENTER,
            });
          })
          .catch((err) => toast.warn(err?.message));
        // navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        toast.warn(err.message);
      });
  };

  return (
    <div className="hero py-20 bg-slate-600 w-full">
      <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full">
        <h2 className="text-4xl text-center">Register</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photoURL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="px-10 mt-0 pb-3">
          <GoogleSignIn />
          <p className="py-4 hover:underline text-center mt-2">
            <Link to="/login">Already have an account? Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
