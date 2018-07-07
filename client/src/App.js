import React, { Component } from "react";
import "./App.css";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class App extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className="App">
        <ul>
          {this.props.data.countries &&
            this.props.data.countries.map((country, index) => {
              return <li key={index}>{country}</li>;
            })}
        </ul>
      </div>
    );
  }
}

const COUNTRIES_QUERY = gql`
  query countries($min: Int, $max: Int) {
    countries(min: $min, max: $max)
  }
`;

export default graphql(COUNTRIES_QUERY, {
  options: props => ({ variables: { min: props.min, max: props.max } })
})(App);
