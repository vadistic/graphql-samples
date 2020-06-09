/**
 * Create apollo client
 *
 * https://www.apollographql.com/docs/tutorial/client/#create-an-apollo-client
 */

import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://players-api.now.sh',
})

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
})
