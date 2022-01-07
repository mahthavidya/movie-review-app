import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Badge, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { color } from "@mui/system";
// import Badge from '@mui/material/Badge';
// import { AiFillHeart } from "react-icons/ai";
import "./sliderCss.css";
import "./SliderMovie.css";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[700]),
  backgroundColor: red[700],
  textAlign: "center",
  "&:hover": {
    backgroundColor: red[700],
  },
}));

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const SliderMovie = (props) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ backgroundColor: "#333" }}
        paddingLeft={"15px"}
      >
        <Grid
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div
            style={{
              color: "white",
              paddingTop: "7px",
              paddingBottom: "7px",
              width: "700px",
              minWidth: "700px",
              maxWidth: "700px",
              marginTop: "50px",
            }}
          >
            <h1 style={{ marginLeft: "30px", textTransform: "uppercase" }}>
              {props.category}
            </h1>
          </div>
        </Grid>
        {props.data &&
          props.data.length &&
          props.data.map((el) => {
            return (
              <>
                <Grid xs={3} padding={"30px 10px 30px 10px"}>
                  <Card sx={{ Width: "400px", maxHeight: "650px" }}>
                    <CardActionArea>
                      <Link
                        //   to={`/userdata ${e.id}`}
                        to={{
                          pathname: `/moviedetails`,
                        }}
                        state={el.id}
                      >
                        <CardMedia
                          component="img"
                          justifyContent="center"
                          image={el.url}
                          height="300"
                        />
                      </Link>

                      <CardContent
                      // style={{
                      //   margin: "10px 10px 10px 10px",
                      // }}
                      >
                        <Typography variant="h6">{el.title}</Typography>
                        {el.adult ? (
                          <Badge badgeContent={"A"} color="secondary" />
                        ) : (
                          <Badge badgeContent={"U/A"} color={"secondary"} />
                        )}
                        <br />
                        <Stack spacing={1}>
                          <Rating
                            name="size-small"
                            size="small"
                            name="half-rating"
                            color="red"
                            max={5}
                            value={el.vote_average / 2}
                            precision={0.5}
                            readOnly
                          />
                        </Stack>

                        {/* //  <Typography variant="body2" color="text.secondary">  */}
                        <div className="container">
                          <ReadMore>{el.overview}</ReadMore>
                        </div>
                        <Grid
                          container
                          xs={12}
                          alignContent={"baseline"}
                          alignItems={"baseline"}
                        >
                          {el.genre_ids.map((el) => {
                            return (
                              <Grid item xs={3}>
                                <h5>{el}</h5>
                              </Grid>
                            );
                          })}
                        </Grid>
                        <CardActions>
                          <h4>Release Date:</h4>
                          <p>{el.release_date}</p>
                        </CardActions>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </>
            );
          })}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          {props.loadMore && (
            <Link to="/upcomingmovie" style={{ textDecoration: "none" }}>
              <ColorButton variant="contained">Load more</ColorButton>
            </Link>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SliderMovie;
