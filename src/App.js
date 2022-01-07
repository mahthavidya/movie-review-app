import CssBaseline from "@mui/material/CssBaseline";
// import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
// import Paper from "@mui/material/Paper";
import { grey, red } from "@mui/material/colors";
// import Button from "@mui/material/Button";
import Landing from "./pages/Landing";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  popularData,
  upcomingData,
  setGenreRedux,
  TopRatedData,
} from "./MovieRedux";
import { Route, Routes } from "react-router-dom";
import UpcomingMovie from "./pages/UpcomingMovie";
import Backdrop from "./pages/Backdrop";
import MovieDetails from "./pages/MovieDetails";
import { ChangeDate } from "./common/changeDateFormat";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#d50000",
      dark: red[900],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    background: {
      default: "#212121",
      paper: grey[900],
    },
  },
});

function App() {
  const [genre, setGenre] = useState([]);
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [allApiStatus, setAllApiStatus] = useState(true);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getGenre();
  }, []);

  useEffect(() => {
    if (genre.length > 0) {
      Upcoming();
      Popular();
      TopRated();
    }
  }, [genre]);

  useEffect(() => {
    if (genre.length > 0) {
      dispatch(setGenreRedux(genre));
    }
  }, [genre]);

  useEffect(() => {
    if (upcomingMovie !== null && upcomingMovie !== "") {
      dispatch(upcomingData(upcomingMovie));
    }
  }, [upcomingMovie]);

  useEffect(() => {
    if (popularMovie !== null && popularMovie !== "") {
      dispatch(popularData(popularMovie));
    }
  }, [popularMovie]);

  useEffect(() => {
    if (TopRatedMovie !== null && TopRatedMovie !== "") {
      dispatch(TopRatedData(TopRatedMovie));
    }
  }, [TopRatedMovie]);

  const getGenre = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=5891d56f7a2e442324df0162cdd8eea0&language=en-US"
    );

    if (res.data && res.data.genres.length) {
      const tempGenre = [...res.data.genres];
      setGenre(tempGenre);
    }
  };

  const GetGenreNameFromID = (data) => {
    let tempGenTranslated = [];
    data.forEach((ele) => {
      const tempName = genre.find((element) => element.id === ele);
      tempGenTranslated.push(tempName.name);
    });
    return tempGenTranslated;
  };

  const Upcoming = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=5891d56f7a2e442324df0162cdd8eea0"
    );

    let tempobj = [];
    res.data.results.forEach((el) => {
      const temp = {
        ...el,
        url: `https://image.tmdb.org/t/p/original${el.backdrop_path}`,
        genre_ids: GetGenreNameFromID(el.genre_ids),
        release_date: ChangeDate(el.release_date),
      };
      tempobj.push(temp);
      console.log("temp", temp);
    });

    setUpcomingMovie(tempobj);
  };

  const Popular = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=5891d56f7a2e442324df0162cdd8eea0"
    );
    const tempobj1 = [];
    res.data.results.forEach((e) => {
      const temp1 = {
        ...e,
        url: `https://image.tmdb.org/t/p/original${e.poster_path}`,
        genre_ids: GetGenreNameFromID(e.genre_ids),
        release_date: ChangeDate(e.release_date),
      };
      tempobj1.push(temp1);
    });

    setPopularMovie(tempobj1);
    setAllApiStatus(false);
  };

  const TopRated = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=5891d56f7a2e442324df0162cdd8eea0"
    );
    const tempobj2 = [];
    res.data.results.forEach((e) => {
      const temp2 = {
        ...e,
        url: `https://image.tmdb.org/t/p/original${e.poster_path}`,
        genre_ids: GetGenreNameFromID(e.genre_ids),
        release_date: ChangeDate(e.release_date),
      };
      tempobj2.push(temp2);
    });
    setTopRatedMovie(tempobj2);
    setAllApiStatus(false);
  };

  return (
    <>
      {/* <CssBaseline />
        <ThemeProvider theme={theme}> */}
      <Routes>
        <Route path="/" element={allApiStatus ? <Backdrop /> : <Landing />} />
        <Route path="/" element={<UpcomingMovie />} />
        <Route path="/upcomingmovie" element={<UpcomingMovie />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
