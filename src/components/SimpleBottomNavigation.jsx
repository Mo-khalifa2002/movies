import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const useStyles = makeStyles({
  bottomnav: {
    position: "fixed",
    bottom: "0",
    transform: "scale(1.5)",
    backgroundColor: "#222",
    zIndex: "1000",
    marginLeft: "35%",
    marginRight: "auto",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  // const history = useNavigate();

  // useEffect(() => {
  //   if (value === 0) history.push("/");
  //   else if (value === 1) {
  //     history.push("/movies");
  //   } else if (value === 2) {
  //     history.push("/series");
  //   } else if (value === 3) {
  //     history.push("/search");
  //   }
  // }, [value, history]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      sx={{
        // position: "fixed",
        // width: "100%",
        // bottom: "0",
      }}
    >
      <BottomNavigation
        className={classes.bottomnav}
        sx={{ width: 500, backgroundColor: "#222", color: "#fff" }}
        value={value}
        onChange={handleChange}
      >
        <Link to="/">
          <BottomNavigationAction
            sx={{ color: "#e6e6f8" }}
            label="Trending"
            value="recents"
            icon={<WhatshotIcon />}
          />
        </Link>
        <Link to="movies">
          <BottomNavigationAction
            sx={{ color: "#e6e6f8" }}
            label="Movies"
            value="favorites"
            icon={<MovieCreationIcon />}
          />
        </Link>
        <Link to="form">
          <BottomNavigationAction
            sx={{ color: "#e6e6f8" }}
            label="Sign In"
            value="nearby"
            icon={<AssignmentIndIcon />}
          />
        </Link>
        <Link to="fitler">
          <BottomNavigationAction
            sx={{ color: "#e6e6f8" }}
            label="Glass"
            value="folder"
            icon={<HourglassBottomIcon />}
          />
        </Link>
      </BottomNavigation>
    </div>
  );
}
