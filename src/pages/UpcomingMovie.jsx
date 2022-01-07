import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Carousel from "../Components/Carousel/Carousel";
// // import Container from "@mui/material/Container";
import SearchBtn from "../Components/Search/SearchComponent";
import SliderMovie from "../Components/SliderMovie";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const UpcomingMovie = () => {
  const loc = useLocation();
  const upcomingMovieRedux = useSelector(
    (state) => state.MovieStatusReducer.upcomingMovie
  );

  const [upcomingMovie, setUpcomingMovie] = useState([]);

  useEffect(() => {
    setUpcomingMovie(upcomingMovieRedux);
  }, [upcomingMovieRedux]);

  const myStyle = {
    background: "#212121",

    height: "100vh",
    // marginTop: "-70px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle}>
        <Header />
        {upcomingMovie && upcomingMovie.length && (
          <SliderMovie
            category="Upcoming Movies"
            data={upcomingMovie}
            loadMore={false}
          />
        )}
      </div>
    </>
  );
};

export default UpcomingMovie;
