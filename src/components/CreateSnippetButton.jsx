import React from 'react';
import { IconButton } from '@chakra-ui/core';
import { useMutation } from '@apollo/client';

import { GET_SNIPPETS } from '../graphql/queries';
import { CREATE_SNIPPET } from '../graphql/mutations';

const DEFAULT_SNIPPET = `// add your code snippet here!
// automatically saves on blur :)
`

const DEFAULT_NOTES = 'any extra details?'

/**
 * The main control for creating a new snippet
 */
export const CreateSnippetButton = () => {
  const [createSnippet] = useMutation(CREATE_SNIPPET, {
    variables: {
      text: DEFAULT_SNIPPET,
      notes: DEFAULT_NOTES,
    },
    refetchQueries: [{ query: GET_SNIPPETS }]
  });

  return (
    <IconButton
      onClick={createSnippet}
      variantColor="blue"
      aria-label="create a new snippet"
      size="lg"
      icon="add"
      isRound
    />
  );
}