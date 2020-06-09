import gql from 'graphql-tag'

export const PLAYER_LIST_QUERY = gql`
  query PlayerList {
    players {
      id
      name
      score
    }
  }
`

export const DELETE_PLAYER_MUTATION = gql`
  mutation DeletePlayer($id: Int!) {
    deletePlayer(where: { id: $id }) {
      id
      name
      score
    }
  }
`
