import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AceEditor from 'react-ace';


import { Flex, Box, Text, theme } from '@chakra-ui/core';

// TODO: centralize
const { colors } = theme;

// TODO: core logged-out view
// TODO: core logged-in view

export function Navigation() {
  return (
    <Router>
      <Flex justifyContent="space-between" bg={colors.red['400']}>

        <Box border="3px solid black" padding={3} margin={8} backgroundColor="#fff" width="25%" height="25vh" position="sticky" top={8}>
          <Flex flexDirection="column">
            <Box py={3}>
              <Link to="/">Home</Link>
            </Box>
            <Box py={3}>
              <Link to="/about">About</Link>
            </Box>
            <Box py={3}>
              <Link to="/users">Users</Link>
            </Box>
          </Flex>
        </Box>

        <Box border="3px solid black" padding={3} margin={8} backgroundColor="#fff" width="80%" height="150vh">
          <Flex flexDirection="column">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* This is the actual PAGE content :) */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Flex>
        </Box>
      </Flex>
    </Router>
  );
}

function Home() {
  return (
    <>
    <Flex flexDirection="row" justifyContent="space-around" my={5}>
      <Box border="1px solid grey" width="60%">
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%' }}
        />
      </Box>
      <Box minHeight="10vh" border="1px solid grey" width="30%"></Box>
    </Flex>

    <Flex flexDirection="row" justifyContent="space-around" my={5}>
      <Box border="1px solid grey" width="60%">
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%' }}
        />
      </Box>
      <Box minHeight="10vh" border="1px solid grey" width="30%"></Box>
    </Flex>

    <Flex flexDirection="row" justifyContent="space-around" my={5}>
      <Box border="1px solid grey" width="60%">
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%' }}
        />
      </Box>
      <Box minHeight="10vh" border="1px solid grey" width="30%"></Box>
    </Flex>

    <Flex flexDirection="row" justifyContent="space-around" my={5}>
      <Box border="1px solid grey" width="60%">
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%' }}
        />
      </Box>
      <Box minHeight="10vh" border="1px solid grey" width="30%"></Box>
    </Flex>

    <Flex flexDirection="row" justifyContent="space-around" my={5}>
      <Box border="1px solid grey" width="60%">
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%' }}
        />
      </Box>
      <Box minHeight="10vh" border="1px solid grey" width="30%"></Box>
    </Flex>
    </>
  );
}

function About() {
  return (
    <Flex flexDirection="column" p={5} bg={colors.blue['300']}>
      <Text>About</Text>
    </Flex>
  );
}

function Users() {
  return (
    <Flex flexDirection="column" p={5} bg={colors.blue['300']}>
      <Text>Users</Text>
    </Flex>
  );
}