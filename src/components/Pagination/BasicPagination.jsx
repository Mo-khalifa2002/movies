import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './Pagination.css'
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@mui/system";

// const darkTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });


export default function BasicPagination({ setPage,numOfPages=10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
    //   style={{
    //     width: "100%",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: "10px",
    //   }}
    >
      {/* <ThemeProvider them={darkTheme}> */}
        <Stack spacing={2}>
          <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numOfPages}
            color="primary"
          />
        </Stack>
      {/* </ThemeProvider> */}
    </div>
  );
}
