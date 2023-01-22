import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      value: "Error occurred",
    };
  }
  componentDidCatch(error) {
    this.setState({ hasError: true, value: `${error}` });
  }
  render() {
    if (this.state.hasError) {
      return <div>{this.state.value} </div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
