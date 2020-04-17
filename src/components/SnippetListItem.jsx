import React, { useState } from 'react';
import AceEditor from 'react-ace';
import { Flex, Box, Textarea, theme } from '@chakra-ui/core';
import { useMutation } from '@apollo/client';

import { UPDATE_SNIPPET } from '../graphql/mutations';
import { DeleteSnippetButton } from './DeleteSnippetButton';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

/**
 * TODOS:
 * - tags
 * - light/dark mode
 */

/**
 * The main UI block for creating and documenting a code snippet
 */
export const SnippetListItem = ({ id, text, notes }) => {
  const [activeSnippet, setActiveSnippet] = useState(text);
  const [activeNotes, setActiveNotes] = useState(notes);

  const handleBlur = () => {
    // only update if the snippet or notes have actually changed
    if (activeSnippet !== text || activeNotes !== notes) {
      updateSnippet({ variables: { id, text: activeSnippet, notes: activeNotes } });
    }
  }

  const handleEditorChange = (newValue) => {
    setActiveSnippet(newValue);
  }

  const handleNotesChange = (event) => {
    setActiveNotes(event.target.value);
  };

  const [updateSnippet] = useMutation(UPDATE_SNIPPET);

  return (
    <Flex flexDirection="row" justifyContent="center" my={5}>
      <Box width="60%">
        <AceEditor
          // readOnly
          onBlur={handleBlur}
          debounceChangePeriod={50}
          mode="javascript"
          theme="dracula"
          onChange={handleEditorChange}
          name={id}
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
          style={{ width: '100%', fontSize: 14, border: "1px solid black", fontFamily: 'Roboto Mono' }}
          value={activeSnippet}
          highlightActiveLine={false}
        />
      </Box>
      <Flex pl={5} width="30%" flexDirection="column">
        <Textarea
          fontFamily="Roboto Mono"
          fontSize={14}
          p={5}
          minHeight="25vh"
          width="100%"
          value={activeNotes}
          borderRadius={0}
          onChange={handleNotesChange}
          onBlur={handleBlur}
        />
        {/* dude wtf do padding and margin really work like this on web? */}
        <Flex mt={5} ml={10} width="100%" justifyContent="flex-end">
          <DeleteSnippetButton snippetId={id} />
        </Flex>
      </Flex>
    </Flex>
  );
}