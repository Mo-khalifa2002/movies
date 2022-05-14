import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#222",
    padding: "1rem",
    color: "#e2f91e",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    cursor: "pointer",
    marginBottom: "15rem",
    zIndex: "1000",
  },
});

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    // this window.scroll => is to go to the top of the page
    <div onClick={() => window.scroll(0, 0)} className={classes.header}>
      🎥 Mk Movie Website 🎬
    </div>
  );
};

export default ButtonAppBar;
