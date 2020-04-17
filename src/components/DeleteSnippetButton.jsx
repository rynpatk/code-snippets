import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/core';
import { useMutation } from '@apollo/client';

import { GET_SNIPPETS } from '../graphql/queries';
import { DELETE_SNIPPET } from '../graphql/mutations';

/**
 * The main control for deleting a snippet
 */
export const DeleteSnippetButton = ({ snippetId }) => {
  const [deleteReady, setDeleteReady] = useState(false);

  const [deleteSnippet] = useMutation(DELETE_SNIPPET, {
    variables: {
      id: snippetId,
    },
    refetchQueries: [{ query: GET_SNIPPETS }]
  });

  // simple 2-stage delete process which deactivates after a second
  // intended to prevent accidental deletes without slowing down rapid deletes
  const startDeleteProcess = () => {
    setDeleteReady(true);

    setTimeout(() => {
      setDeleteReady(false);
    }, 1000)
  }

  return deleteReady ? (
    <IconButton
      onClick={deleteSnippet}
      variantColor="red"
      aria-label="really delete a snippet"
      size="lg"
      icon="close"
      isRound
    />
  ) : (
    <IconButton
      onClick={startDeleteProcess}
      variantColor="yellow"
      aria-label="delete a snippet"
      size="lg"
      icon="delete"
      isRound
    />
  );
}