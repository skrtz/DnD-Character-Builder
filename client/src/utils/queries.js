import { gql } from '@apollo/client';

export const QUERY_CHARACTERS = gql `
    query getCharacters{
        Character{
            _id
            name
            image
        }
    }
`