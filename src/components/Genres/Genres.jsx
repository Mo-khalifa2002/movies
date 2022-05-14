import React, { useEffect } from "react";
import axios from "axios";
import "./GenresCss.css";
import Chip from "@mui/material/Chip";

const Genres = ({
  setPage,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `
        https://api.themoviedb.org/3/genre/movie/list?api_key=7945b010075499d415d561c0dee764e6&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);

  useEffect(() => {
    fetchGenres();

    //cancel the api call when rendering the page
    // but this *** 😬🤷‍♂️made the hole program stops
    // return () => {
    //   setGenres({});
    // };
  }, []);

  const handleAddingGenre = (genre) => {
    //adding the genre to the selected genres
    setSelectedGenres(...selectedGenres, genre);
    //removing the genre to the genreal genres
    setGenres(genres.filter((g) => g.id !== genre.id));
    //setting the page back to one
    setPage(1);
  };

  const handleRemoveGenreFromSelectedGenres = (genre) => {
    //removing the item from the selected genres
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    //adding the item back to the general genres
    setGenres(...genres, genre);
    //setting the apge back to one
    setPage(1);
  };

  return (
    <div className="genres">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            className="chip"
            label={genre.name}
            clickable
            sx={{ margin: "3px" }}
            key={genre.id}
            color="primary"

            // not working
            // onClick={() => handleRemoveGenreFromSelectedGenres(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            className="chip"
            label={genre.name}
            clickable
            sx={{ margin: "3px" }}
            key={genre.id}

            // not working
            // onClick={() => handleAddingGenre(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
