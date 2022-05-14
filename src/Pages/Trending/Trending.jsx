import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../../components/Singlecontent/SingleContentCss.css";
import SingleContent from "../../components/Singlecontent/SingleContent";
import BasicPagination from "../../components/Pagination/BasicPagination";
import { img_300 } from "../../components/Config/Confing";
import { Badge } from "@mui/material";
import "../../components/Singlecontent/SingleContentCss.css";
import { Fade } from "react-reveal";

const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchingTrending = async () => {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/trending/all/day?api_key=7945b010075499d415d561c0dee764e6&page=${page}`);

    // console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchingTrending();
  }, [page]);

  //  const display=(i)=>{
  // return (
  //   <>
  //     {/* <img src={i.poster_path} className="w-100"/> */}
  //     <h2 className='text-black'>{i.title}</h2>
  //     <p>{i.data}</p>

  //   </>
  // );

  //   }

  return (
    <div>
      <div className="pageTitle">🔥🎆🎇 Trending 🔥🎆🎇</div>
      <div className="trending ">
        {content &&
          content.map((c) => (
            <Fade bottom>
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
                overview={c.overview}
              />
            </Fade>
          ))}
      </div>
      <BasicPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
