import React from "react";
import { Link } from "react-router-dom";
import StarRaiting from "./StarRaiting";

const MovieCard = ({ moviecard }) => {
  return (
    <div>
      <StarRaiting rating={moviecard.rating} />
      <h3>{moviecard.name}</h3>
      <img src={moviecard.image} alt={moviecard.name} />
      <p>{moviecard.date}</p>
      <button>
        <Link to={`/Info/${moviecard.name}`}>Info</Link>
      </button>
    </div>
  );
};

export default MovieCard;
