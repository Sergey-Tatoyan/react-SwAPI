import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import ErrorBoundary from "../ErrorBoundary";

import { StarshipDetail, StarshipList } from "../SwComponents";

class StarshipPage extends Component {
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
            <StarshipList getItemId={this.getItemId} />
          </Col>

          <Col md="9">
            <StarshipDetail itemId={itemId} />
          </Col>
        </Row>
      </ErrorBoundary>
    );
  }
}

export default StarshipPage;
