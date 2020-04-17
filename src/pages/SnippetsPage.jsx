import React from 'react';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import { SnippetListItem } from '../components';
import { GET_SNIPPETS } from '../graphql/queries';

export const SnippetsPage = () => {
  const { loading, error, data } = useQuery(GET_SNIPPETS);

  if (loading || error) return null;

  return (
    <Box p={10} width="90%">
      {data.snippets.map(snippet => <SnippetListItem {...snippet} />)}
    </Box>
  );
}