import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`  
  query Articles {
    articles {
      id
      titel
      content
      category {
        id
        name
      }
      afbeelding {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
