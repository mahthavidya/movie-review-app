import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Header from "../Components/Header/Header";
import Footer from "../Footer/Footer";
import { Badge, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import { ChangeDate } from "../common/changeDateFormat";
// // import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// // import CardMedia from "@mui/material/CardMedia";

const MovieDetails = () => {
  const loc = useLocation();
  const [movieData, setMovieData] = useState("");
  const [moviedetails, setMovieDetails] = useState([{}]);

  useEffect(() => {
    if (loc && loc.state !== null) {
      console.log("state", loc.state);
      setMovieData(loc.state);
    }
  }, [loc]);

  useEffect(() => {
    if (movieData !== null) {
      MovieDetailsData();
    }
  }, [movieData]);

  const MovieDetailsData = async () => {
    console.log("movieData", movieData);
    const res = await axios.get(
      ` https://api.themoviedb.org/3/movie/${movieData}?api_key=5891d56f7a2e442324df0162cdd8eea0`
    );
    console.log("res", res.data);
    const tempMovieDetails = { ...res.data };
    console.log("tempMovieDetails", tempMovieDetails);
    // setMovieDetails(tempMovieDetails);
    tempMovieDetails.url = `https://image.tmdb.org/t/p/original${res.data.poster_path}`;

    const tempdata = { ...tempMovieDetails };
    console.log("tempdata", tempdata);

    const newData = tempdata.production_companies.map((el) => {
      return {
        ...el,
        url1: `https://image.tmdb.org/t/p/original${
          el.logo_path ? el.logo_path : res.data.poster_path
        }`,
        release_date: ChangeDate(el.release_date),
      };
    });

    console.log("newData", newData);
    tempMovieDetails.production_companies = newData;
    setMovieDetails(tempMovieDetails);
    console.log("temp", tempMovieDetails);
  };

  const myStyle = {
    background: "#212121",

    // marginTop: "-70px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div style={myStyle}>
        <Header />
      </div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ backgroundColor: "#333" }}
        paddingLeft={"15px"}
        padding={"30px"}
      >
        <Grid container spacing={2}>
          <Grid xs={8}></Grid>
          <Grid xs={6} padding={"30px 10px 30px 10px"}>
            <CardMedia
              component="img"
              height="300"
              justifyContent="center"
              image={moviedetails.url}
              //  alt="green iguana"
            />
          </Grid>
          <Grid xs={6} padding={"30px 10px 30px 10px"}>
            <Typography variant="h5" color={"white"}>
              {moviedetails.original_title}
            </Typography>

            <div>{moviedetails.status}</div>
            <br />
            {moviedetails.adult ? (
              <Badge badgeContent={"A"} color="secondary" />
            ) : (
              <Badge badgeContent={"U/A"} color={"secondary"} />
            )}
            <Stack spacing={1}>
              <Rating
                name="size-small"
                size="small"
                name="half-rating"
                color="red"
                max={5}
                value={moviedetails.vote_average / 2}
                precision={0.5}
                readOnly
              />
            </Stack>
            <br />
            {/* <Typography variant="h7" color={"white"}>
              Genres : {moviedetails.genres.map((el) => `${el.name},`)}
            </Typography> */}
            <br />
            <div style={{ color: "white" }}>{moviedetails.overview}</div>
            <div>
              <CardActions>
                <h4>Release Date:</h4> <br />
                <p>{moviedetails.release_date}</p>
              </CardActions>
            </div>
          </Grid>
        </Grid>

        <Grid xs={12} direction="row" container spacing={1}>
          <Grid xs={12} item>
            <Typography variant="h6" color={"white"}>
              Production Companies
            </Typography>
          </Grid>
          {moviedetails.production_companies &&
            moviedetails.production_companies.length > 0 &&
            moviedetails.production_companies.map((el) => {
              return (
                <Grid xs={2} item>
                  <Card>
                    <CardMedia component="img" image={el.url1} />
                  </Card>
                </Grid>
              );
            })}

          {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent> */}
          {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          {/* </div>  */}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default MovieDetails;
