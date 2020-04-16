import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GET_USERS {
    users {
      id
    }
  }
`;

export const GET_SNIPPETS = gql`
  query GET_SNIPPETS {
  snippets {
    id
    text
    notes
    created_at
  }
}
`;
