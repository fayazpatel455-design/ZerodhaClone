import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center  p-6 mb-5 ">
      <div className="row">
        <h1 className="mt-5">404 NOt Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
