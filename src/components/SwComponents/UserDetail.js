import React from "react";
import Record from "../Record";
import ItemDetail from "../ItemDetail";
import { withSwapiData } from "../hocHelpers";

const UserDetail = props => {
  return (
    <ItemDetail {...props}>
      <Record lable="Gender" objKey="gender" />
      <Record lable="Eye Color" objKey="eyeColor" />
    </ItemDetail>
  );
};

const mapMethodToprops = swapi => {
  return {
    getData: swapi.getUser,
    getImage: swapi.getUserImage
  };
};

export default withSwapiData(UserDetail, mapMethodToprops);
