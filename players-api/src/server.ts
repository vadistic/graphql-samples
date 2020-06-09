import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './type-defs'
import { PrismaClient } from '@prisma/client'
import { resolvers } from './resolver'

export const bootstrap = async () => {
  const db = new PrismaClient()

  const app = express()

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: () => ({ db }),
    playground: { endpoint: '/' },
    introspection: true,
    debug: process.env.NODE_ENV !== 'production',
  })

  server.applyMiddleware({ app, path: '/' })

  return { server, app, db }
}
