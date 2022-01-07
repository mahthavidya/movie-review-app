import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
// import Data from "./SliderData";

import "./carousel.css";

const Carousel = (props) => {
  return (
    <>
      <SimpleImageSlider
        width={"100%"}
        height={504}
        images={props.data}
        showBullets={true}
        showNavs={true}
      />
    </>
  );
};
export default Carousel;
