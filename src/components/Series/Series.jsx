import React, { useEffect, useState } from "react";
import axios from "axios";
import Genres from "../Genres/Genres";
import useGenre from "../../hooks/useGenre";
import BasicPagination from "../Pagination/BasicPagination";


const Series = () => {
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
        https://api.themoviedb.org/3/tv/{tv_id}?api_key=7945b010075499d415d561c0dee764e6&language=en-US`);

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
        type="tv"
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
              media_type="tv"
              vote_average={c.vote_average}
              overview={c.overview}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <BasicPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Series;
