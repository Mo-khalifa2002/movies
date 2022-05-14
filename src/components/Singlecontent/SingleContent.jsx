import Badge from "@mui/material/Badge";
import React from "react";
import { img_300, unavailable } from "../Config/Confing";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContentCss.css";
import Fade from "react-reveal/Fade";


const SingleContent = ({
  id,
  poster,
  media_type,
  vote_average,
  title,
  date,
  overview,
}) => {
  return (
    // media_type => tv or movie,, and the id to fitch all information
    //about the specific item media
    //I will send them to the ContentModel
    <ContentModal media_type={media_type} id={id}>
      {/* we will take the className ='singleCard' and give it to
          button in the ContentModal so it takes the styling
          then we will put the Badge content as a {children} in the
          ContentModal button text
      */}
      {/* <div className="singleCard"> */}
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "error"}
      />
      {/* if the poster exist fetch the poster and , if the poster is not exist
            fetch this placeholder img => {img_300}. and if the poster is not exist
            at all fetch the img => {unavailable}
        */}

      <img className="poster" src={`${img_300}/${poster}`} alt={title} />
      <div className="cardContent">
        {/* <h2 className="movies-title">{title}</h2> */}
        <div className="movieName">{title}</div>
        <div className="typeAndDate">
          <span className="mediaType">
            {media_type === "tv" ? "Tv Series" : "Movie"}
          </span>
          <div className="date">{date}</div>
          {/* <div className="date">{overview}</div> */}
        </div>
      </div>
      {/* </div> */}
    </ContentModal>
  );
};

export default SingleContent;
