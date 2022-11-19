import React from "react";
import "./css/Image.css";

const Image = () => {
  return (
    <div className="Image">
      <a
        href="https://kiyavia.com/cities/kyiv"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="img-original"
          src="https://media.slovoidilo.ua/media/publications/16/153917/153917-1_large.jpg"
          alt="Kyiv"
        />
      </a>
    </div>
  );
};

export default Image;
