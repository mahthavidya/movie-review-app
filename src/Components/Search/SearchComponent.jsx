import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";

const btnstyle = {
  height: "40px",
  width: "10%",
  backgroundColor: "red",
  marginLeft: "5px",

  border: "none",
  color: "white",
};
const txtstyle = {
  height: "40px",
  width: "40%",
  paddingLeft: "20px",
};

const Search = (props) => {
  const upSr = (e) => {
    const temp = { ...props.sr };
    if (e.target.value === "") {
      temp.searchVal = e.target.value;
      temp.searchInitiated = false;
      props.setSearch(temp);
    } else {
      props.setSearch({
        searchVal: e.target.value,
        searchInitiated: false,
      });
    }
  };

  const InitiateSearch = () => {
    const temp = { ...props.sr };
    temp.searchInitiated = !props.sr.searchInitiated;
    props.setSearch(temp);
  };
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#333" }}
        paddingTop={"80px"}
        paddingBottom={"40px"}
      >
        <input
          type="text"
          placeholder="search here..."
          value={props.sr.searchVal}
          style={txtstyle}
          onChange={upSr}
        />
        <button style={btnstyle} onClick={InitiateSearch}>
          Search{" "}
        </button>
      </Grid>
    </div>
  );
};
export default Search;
