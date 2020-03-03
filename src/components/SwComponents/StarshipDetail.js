import React from "react";
import Record from "../Record";
import ItemDetail from "../ItemDetail";
import { withSwapiData } from "../hocHelpers";

const StarshipDetail = props => {
  return (
    <ItemDetail {...props}>
      <Record lable="Name" objKey="name" />
      <Record lable="Model" objKey="model" />
    </ItemDetail>
  );
};

const mapMethodToprops = swapi => {
  return {
    getData: swapi.getStarShip,
    getImage: swapi.getStarshipImage
  };
};

export default withSwapiData(StarshipDetail, mapMethodToprops);
