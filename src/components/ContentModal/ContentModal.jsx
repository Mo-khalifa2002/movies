import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { img_500, unavailable } from "../Config/Confing";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./ContentModalCss.css";
import Carousel from "../Swiper/Swiper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "85%",
  bgcolor: "#222",
  border: "2px solid #8b83ff",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //states
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=7945b010075499d415d561c0dee764e6&language=en-US`
    );

    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=7945b010075499d415d561c0dee764e6&language=en-US`
    );
    console.log(data);
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div className="singleCard" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {content && (
            <div className="modelContentt">
              <img
                className="imgPortrait"
                src={
                  // backdrob_path => is big in 9:16
                  content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : unavailable
                }
                alt={content.name || content.title}
              />
              <img
                className="imgPortraitWide"
                src={
                  // backdrob_path => is small in 16:9
                  content.backdrop_path
                    ? `${img_500}/${content.backdrop_path}`
                    : unavailable
                }
                alt={content.name || content.title}
              />
              <div className="modelContent">
                <div className="all1">
                  <div className="modelContentText">
                    {content.name || content.title}(
                    {content.first_air_date || content.release_date || "---"})
                  </div>
                  <div className="modelContentTagline">
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                  </div>
                  <div className="contentModelDescreption">
                    {content.overview}
                  </div>
                  {/* <div className="modelContentCarousel">
                    <Carousel
                      className="carousel"
                      media_type={media_type}
                      id={id}
                    />
                  </div> */}
                </div>
                <div className="desAndCar"></div>
                <Button
                  fullWidth
                  sx={{
                    padding: "5px",
                    fontSize: "20px",
                  }}
                  startIcon={<YouTubeIcon />}
                  target="_blank"
                  href={`https://www.youtube.com/watch?v=${video}`}
                  variant="contained"
                  color="secondary"
                >
                  Watch the trailer
                </Button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}
