import React from "react";

const CarouselImage = (props) => {
  return (
    <div>
      <img src={props.text} alt="" style={{ height: "70vh", width: "50vw" }} />
    </div>
  );
};

export default CarouselImage;
