import React from 'react';
import AceEditor from 'react-ace';
import { Flex, Box, Textarea } from '@chakra-ui/core';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";

const DEFAULT_JS = `import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';

import { Navigation } from './components';

export const App = ({ children }) => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
`;

const DEFAULT_NOTES = `This is an example of setting up the root ThemeProvider for @chakra-ui.`

/**
 * The main UI block for creating and documenting a code snippet
 * TODO: add "isEditing" states as props
 */
export const SnippetListItem = () => {
  return (
    <Flex flexDirection="row" justifyContent="space-around" my={5}>
      <Box border="1px solid grey" width="60%">
        <AceEditor
          mode="javascript"
          theme="solarized_dark" // TODO: light mode/dark mode toggle
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%' }}
          value={DEFAULT_JS}
          highlightActiveLine={false}
        />
      </Box>
      <Textarea minHeight="20vh" width="30%" value={DEFAULT_NOTES} />
      {/* TODO: tags */}
    </Flex>
  );
}