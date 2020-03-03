import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./App.css";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import { PersonPage, StarshipPage, PlanetPage } from "../pages";
import ErrorButton from "../ErrorButton";
import ErrorBoundary from "../ErrorBoundary";
import { SwProvider } from "../SwContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SwapiService from "../../services/SwapiService";

class App extends Component {
  swapi = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <Container fluid>
          <Router>
            <SwProvider value={this.swapi}>
              <Header />
              <RandomPlanet />
              <ErrorButton />
              <Switch>
                <Route path="/" component={PersonPage} exact />
                <Route path="/starship" component={StarshipPage} />
                <Route path="/planets" component={PlanetPage} />
              </Switch>
            </SwProvider>
          </Router>
        </Container>
      </ErrorBoundary>
    );
  }
}

export default App;
