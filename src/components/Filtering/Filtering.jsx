import React from "react";
import { useState, useEffect } from "react";
import Movieee from "./Movieee";
import "./filter.css";

const Filtering = () => {
  const [popular, setPopular] = useState([]);

  const fetchFilteringData = async () => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/trending/all/day?api_key=7945b010075499d415d561c0dee764e6`
    );

    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };

  useEffect(() => {
    fetchFilteringData();
  }, []);

  return (
    <div>
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movieee key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Filtering;
