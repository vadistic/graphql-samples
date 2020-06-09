import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  scalar DateTime

  type Mutation {
    createPlayer(data: PlayerCreateInput!): Player!
    updatePlayer(
      data: PlayerUpdateInput!
      where: PlayerWhereUniqueInput!
    ): Player
    deletePlayer(where: PlayerWhereUniqueInput!): Player!
  }

  # after: PlayerWhereUniqueInput
  # before: PlayerWhereUniqueInput
  # first: Int
  # last: Int
  # skip: Int
  type Query {
    aggregateScore: AggregateScore
    player(where: PlayerWhereUniqueInput!): Player
    players: [Player!]!
  }

  type AggregateScore {
    max: Int!
    min: Int!
    average: Int!
    sum: Int!
  }

  type Player {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!

    name: String!
    score: Int!
    team: String
  }

  input PlayerCreateInput {
    name: String!
    score: Int!
    team: String
  }

  input PlayerUpdateInput {
    name: String
    score: Int
    team: String
  }

  input PlayerWhereUniqueInput {
    id: Int
  }
`
