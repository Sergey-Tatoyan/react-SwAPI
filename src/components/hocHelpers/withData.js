import React, { Component } from "react";
import Loading from "../Loading";

const withData = View => {
  return class extends Component {
    state = {
      items: null
    };

    componentDidMount() {
      this.getItems();
    }

    getItems = async () => {
      const items = await this.props.getData();
      if (items.length) {
        this.props.getItemId(items[0].id);
      }
      this.setState({ items });
    };

    render() {
      const { items } = this.state;
      if (!items) return <Loading />;

      return <View items={items} {...this.props} />;
    }
  };
};

export default withData;
