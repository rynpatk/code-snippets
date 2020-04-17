import React from 'react';
import { useQuery } from '@apollo/client';

import { SnippetListItem } from '../components/SnippetListItem';
import { GET_SNIPPETS } from '../graphql/queries';

export const SnippetsPage = () => {
  const { loading, error, data } = useQuery(GET_SNIPPETS);

  if (loading || error) return null;

  return (
    <>
      {data.snippets.map(snippet => <SnippetListItem {...snippet} />)}
    </>
  );
}