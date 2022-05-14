import React, { useEffect, useState } from "react";
import BasicPagination from "../../components/Pagination/BasicPagination";
import axios from "axios";
import SingleContent from "../../components/Singlecontent/SingleContent";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hooks/useGenre";
import "../../components/Pagination/Pagination.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ContentModal from "../../components/ContentModal/ContentModal";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Movies = () => {
  //the current movie page
  const [page, setPage] = useState(1);
  //the movie page content
  const [contentt, setContentt] = useState([]);
  //number of pages to display
  const [numOfPages, setNumOfPages] = useState();
  //sates for the genres component
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`
       https://api.themoviedb.org/3/discover/movie?api_key=7945b010075499d415d561c0dee764e6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`);

    // console.log(data);
    setContentt(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

  return (
    <div>
      <div className="pageTitle">🔥🎆🎇 Trending 🔥🎆🎇</div>
      <Genres
        setPage={setPage}
        selectedGenres={selectedGenres}
        genres={genres}
        setSelectedGenres={setSelectedGenres}
        setGenres={setGenres}
        type="Movie"
      />
      <div className="trending">
        {contentt &&
          contentt.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="Movie"
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <ThemeProvider theme={darkTheme}>
          <BasicPagination setPage={setPage} numOfPages={numOfPages} />
        </ThemeProvider>
      )}
    </div>
  );
};

export default Movies;
