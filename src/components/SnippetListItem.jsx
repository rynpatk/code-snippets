import React from 'react';
import AceEditor from 'react-ace';
import { Flex, Box, Textarea, theme } from '@chakra-ui/core';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

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
      <Box width="60%">
        <AceEditor
          mode="javascript"
          theme="dracula" // TODO: light mode/dark mode toggle
          onChange={() => {}}
          name="UNIQUE_ID_OF_DIV"
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%', borderRadius: 10, fontSize: 14, border: "1px solid black" }}
          value={DEFAULT_JS}
          highlightActiveLine={false}
        />
      </Box>
      <Textarea minHeight="25vh" width="30%" value={DEFAULT_NOTES} borderRadius={10} bg={theme.colors.yellow['50']} />
      {/* TODO: tags */}
    </Flex>
  );
}