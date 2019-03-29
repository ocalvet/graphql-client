import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class App extends Component {
  render() {
    const user = this.props.data.user ? this.props.data.user.name : '';
    return (
      <div>
        <h1>GraphQL Testing Library</h1>
        <h3>Welcome {user}</h3>
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
