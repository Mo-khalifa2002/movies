import React, { useEffect, useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import { img_500, noPicture } from "../Config/Confing";
import axios from "axios";

const Carousel = ({ media_type, id }) => {
  const [credites, setCredites] = useState();

  const fetchSwiperData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=7945b010075499d415d561c0dee764e6&language=en-US`
    );

    console.log(data);
    setCredites(data.cast);
  };

  useEffect(() => {
    fetchSwiperData();
  }, []);

  return (
    <div className="carousel">
      {credites &&
        credites?.map((c) => (
          <div className="carouselItemimg">
            <img
              src={c.profile_path ? `${img_500}/${c.profile_path}` : noPicture}
              alt={c?.name}
              className="carouselItem_img"
            />
          </div>
        ))}
    </div>
  );
};

export default Carousel;
