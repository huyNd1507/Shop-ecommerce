import React from "react";
import imgNotFound from "../../../src/assets/image/notfound.png";
import "./Notfound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-img">
        <h1>Not Found</h1>
        <img src={imgNotFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
