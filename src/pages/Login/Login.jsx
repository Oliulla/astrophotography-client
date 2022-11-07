import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import { toast } from 'react-toastify';

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully logged in!", {
            position: toast.POSITION.TOP_CENTER
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero py-20 bg-slate-600 w-full">
      <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
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
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="px-10 mt-0 pb-3">
          <GoogleSignIn />
          <p className="py-4 hover:underline text-center mt-2">
            <Link to="/register">New to Sohoz Bazar? Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;