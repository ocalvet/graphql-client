import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>GraphQL Testing Library</h1>
      </div>
    );
  }
}

const query = gql`
  query getUser($id: String) {
    user(id: $id) {
      name
    }
  }
`;

export default graphql(query, {
  options: {
    variables: {
      id: '1'
    }
  }
})(App);
