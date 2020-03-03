import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import ErrorBoundary from "../ErrorBoundary";

import { UsersList, UserDetail } from "../SwComponents";

class PersonPage extends Component {
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
            <UsersList getItemId={this.getItemId} />
          </Col>

          <Col md="9">
            <UserDetail itemId={itemId} />
          </Col>
        </Row>
      </ErrorBoundary>
    );
  }
}

export default PersonPage;
