import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@chakra-ui/core';

import { Navigation } from './components';

// TODO: move to env
const API_URL = 'https://eb-snippets.herokuapp.com/v1/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: API_URL,
  })
});

export const App = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
