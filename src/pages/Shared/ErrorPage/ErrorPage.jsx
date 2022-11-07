import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div>
      {error && (
        <div className="text-center my-[10%]">
          <div>
            <h1 className="text-4xl">Opps!!!</h1>
            <h3 className="text-5xl my-4">{error.status}</h3>
            <h1 className="text-4xl">{error.statusText}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;