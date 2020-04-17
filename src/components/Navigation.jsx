import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Flex, Box, Text, theme } from '@chakra-ui/core';

import { SnippetsPage } from '../pages';
import { CreateSnippetButton } from '../components';

// TODO: centralize
const { colors } = theme;

const BG_DARK = '#282A36';

// TODO: core logged-out view
// TODO: core logged-in view

export const Navigation = () => {
  return (
    <Router>
      <Flex width="100%" flexDirection="column" flex={1}>
        <Flex justifyContent="center" position="fixed" zIndex={100} bottom={10} left={10}>
          <CreateSnippetButton />
        </Flex>

        <Flex justifyContent="space-between">

          <Box padding={3} margin={8} bg={colors.white} width="25%" height="25vh" position="sticky" top={8}>
            <Flex flexDirection="column">
              <Box py={3}>
                <Link to="/">Home</Link>
              </Box>
              <Box py={3}>
                <Link to="/about">About</Link>
              </Box>
            </Flex>
          </Box>

          <Box border="1px solid black" borderRadius={10} padding={3} margin={8} bg={colors.gray['300']} width="80%" minHeight="100vh">
            <Flex flexDirection="column">
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              {/* This is the actual PAGE content :) */}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <SnippetsPage />
                </Route>
              </Switch>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Router>
  );
}

export const About = () => {
  return (
    <Flex flexDirection="column" p={5} bg={colors.blue['300']}>
      <Text>About</Text>
    </Flex>
  );
}
