import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import ErrorBoundary from "../ErrorBoundary";

import { PlanetsList, PlanetDetail } from "../SwComponents";

class PlanetPage extends Component {
  state = {
    itemId: null
  };

  getItemId = id => {
    this.setState({ itemId: id });
  };

  render() {
    const { itemId } = this.state;

    return (
      <ErrorBoundary>
        <Row className="main-container">
          <Col md="3">
            <PlanetsList getItemId={this.getItemId} />
          </Col>

          <Col md="9">
            <PlanetDetail itemId={itemId} />
          </Col>
        </Row>
      </ErrorBoundary>
    );
  }
}

export default PlanetPage;
