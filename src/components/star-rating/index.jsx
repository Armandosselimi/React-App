import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currIndex) => {
    setRating(currIndex);
  };

  const handleMouseHover = (currIndex) => {
    setHover(currIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className='star-rating'>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            size={40}
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}
