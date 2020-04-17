import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    insert_users(objects: [{ username: $username, password: $password }]) {
      returning {
        id
        username
      }
    }
  }
`;

export const CREATE_SNIPPET = gql`
  mutation CreateSnippet($text: String, $notes: String) {
    insert_snippets(objects: [{ text: $text, notes: $notes }]) {
      returning {
        id
        text
        notes
        created_at
      }
    }
  }
`;

export const UPDATE_SNIPPET = gql`
  mutation UpdateSnippet($id: uuid!, $text: String, $notes: String) {
    update_snippets(where: { id: { _eq: $id } }, _set: { text: $text, notes: $notes }) {
      returning {
        id
        text
        notes
        created_at
      }
    }
  }
`;
