import "./App.css";
import ButtonAppBar from "./components/Navbar/ButtonAppBar";
import LabelBottomNavigation from "./components/SimpleBottomNavigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Form from "./components/Form/Form";
import IconLabelButtons from "./components/Buttons";
import Glass from "./components/Glass/Glass";
import Filtering from "./components/Filtering/Filtering";
import ToTop from "./components/Scroll/ToTop";
import ToBottom from "./components/ScrollCopy/ToBottom";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <div className="App">
        <ToTop />
        <ToBottom />
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="search" element={<Search />} />
            <Route path="form" element={<Form />} />
            <Route path="glass" element={<Glass />} />
            <Route path="filter" element={<Filtering />} />
          </Routes>
        </Container>
        <LabelBottomNavigation />
        {/* <IconLabelButtons /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
