import React from 'react';
import { IconButton } from '@chakra-ui/core';
import { useMutation } from '@apollo/client';

import { GET_SNIPPETS } from '../graphql/queries';
import { DELETE_SNIPPET } from '../graphql/mutations';

/**
 * The main control for deleting a snippet
 */
export const DeleteSnippetButton = ({ snippetId }) => {
  const [deleteSnippet] = useMutation(DELETE_SNIPPET, {
    variables: {
      id: snippetId,
    },
    refetchQueries: [{ query: GET_SNIPPETS }]
  });

  return (
    <IconButton
      onClick={deleteSnippet}
      variantColor="red"
      aria-label="delete a snippet"
      size="lg"
      icon="delete"
      isRound
    />
  );
}