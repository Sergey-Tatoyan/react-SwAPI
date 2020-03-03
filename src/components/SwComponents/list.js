import React from "react";
import ListItem from "../ItemList";
import { withData, withSwapiData } from "../hocHelpers";

const renderWithData = (RenderItem, func) => {
  return props => <RenderItem {...props}>{func}</RenderItem>;
};

const renderName = item => `${item.name}`;
const renderNameAndDiameter = item => `${item.name} (${item.diameter})`;

const mapUserMethodToprops = swapi => {
  return { getData: swapi.getUsers };
};

const mapPlanetMethodToprops = swapi => {
  return { getData: swapi.getPlanets };
};

const mapStarshipMethodToprops = swapi => {
  return { getData: swapi.getStarShips };
};

const UsersList = withSwapiData(
  withData(renderWithData(ListItem, renderName)),
  mapUserMethodToprops
);

const PlanetsList = withSwapiData(
  withData(renderWithData(ListItem, renderNameAndDiameter)),
  mapPlanetMethodToprops
);

const StarshipList = withSwapiData(
  withData(renderWithData(ListItem, renderName)),
  mapStarshipMethodToprops
);

export { UsersList, PlanetsList, StarshipList };
