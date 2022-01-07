import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Carousel from "../Components/Carousel/Carousel";
// // import Container from "@mui/material/Container";
import Search from "../Components/Search/SearchComponent";
import SliderMovie from "../Components/SliderMovie";
import { useSelector } from "react-redux";
import axios from "axios";
import Footer from "../Footer/Footer";
import { generatePath } from "react-router";

// import Box from "@mui/material/Box";
const Landing = () => {
  const upcomingMoviesRedux = useSelector(
    (state) => state.MovieStatusReducer.upcomingMovie
  );

  const popularFilm = useSelector(
    (state) => state.MovieStatusReducer.popularMovie
  );

  const TopRatedFilm = useSelector(
    (state) => state.MovieStatusReducer.TopRatedMovie
  );
  const [genre, setGenre] = useState([]);
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [TopRatedMovie, setTopRatedMovie] = useState([]);
  const [searchValue, setSearchValue] = useState({
    searchVal: "",
    searchInitiated: false,
  });

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchValue.searchInitiated) {
      getSearchData();
    }
  }, [searchValue.searchInitiated]);

  useEffect(() => {
    console.log("upcoming", upcomingMoviesRedux);
    // setUpcomingMovie(upcomingFilm.upcomingMovie);
    setUpcomingMovie(upcomingMoviesRedux);
  }, [upcomingMoviesRedux]);

  useEffect(() => {
    console.log("upcoming movies local hooks", upcomingMovie);
  }, [upcomingMovie]);

  // useEffect(() => {}, [popularMovie]);

  // useEffect(() => {}, [popularFilm]);

  useEffect(() => {
    setPopularMovie(popularFilm);
  }, [popularFilm]);

  useEffect(() => {
    //   setPopularMovie(popularFilm);
    setTopRatedMovie(TopRatedFilm);
  }, [TopRatedFilm]);

  useEffect(() => {
    getGenre();
  }, []);

  const myStyle = {
    background: "#212121",

    height: "100vh",
    // marginTop: "-70px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const GetGenreNameFromID = (data) => {
    let tempGenTranslated = [];
    data.forEach((ele) => {
      const tempgenre = genre.find((el) => el.id === ele);
      tempGenTranslated.push(tempgenre.name);
    });
    return tempGenTranslated;
  };

  const getGenre = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=5891d56f7a2e442324df0162cdd8eea0&language=en-US"
    );

    if (res.data && res.data.genres.length) {
      const tempGenre = [...res.data.genres];
      setGenre(tempGenre);
    }
  };
  const getSearchData = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5891d56f7a2e442324df0162cdd8eea0&query=1&include_adult=false&query=${searchValue.searchVal}`
    );
    let tempobj = [];
    res.data.results.forEach((el) => {
      const temp = {
        ...el,
        url: `https://image.tmdb.org/t/p/original${el.backdrop_path}`,
        genre_ids: GetGenreNameFromID(el.genre_ids),
      };
      tempobj.push(temp);
    });
    // const tempsearchGenre = [...res.data.results];
    // console.log("tempsearchGenre", tempsearchGenre);
    setSearchData(tempobj);
  };

  return (
    <>
      <div style={myStyle}>
        <Header />
        {upcomingMovie && upcomingMovie.length && (
          <Carousel data={upcomingMovie.slice(0, 8)} />
        )}
        <Search setSearch={setSearchValue} sr={searchValue} />
        {searchValue && searchValue.searchInitiated && (
          <SliderMovie
            category="Search Result"
            data={searchData.length && searchData.slice(0, 8)}
            loadMore={false}
          />
        )}
        {popularMovie && popularMovie.length && (
          <SliderMovie
            category="Upcoming Movie"
            data={popularFilm.length && popularFilm.slice(0, 8)}
            loadMore={true}
          />
        )}
        {TopRatedMovie && TopRatedMovie.length && (
          <SliderMovie
            category="Most Rated"
            data={TopRatedFilm.length && TopRatedFilm.slice(0, 8)}
            loadMore={true}
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
