import { gql } from '@apollo/client';

// TODO: set up as vars
export const CREATE_USER = gql`
  mutation CREATE_USER {
    insert_users(objects: [{username: "test", password: "test"}]) {
      returning {
        id
      }
    }
  }
`;

// TODO: set up as vars
export const CREATE_SNIPPET = gql`
  mutation CREATE_SNIPPET {
    insert_snippets(objects: [{text: "test", notes: "test"}]) {
      returning {
        id
        text
        notes
        created_at
      }
    }
  }
`;
