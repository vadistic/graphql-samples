import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'
import { PlayerList } from './components/PlayerList'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Apollo client example</h1>
        </header>
        <PlayerList />
      </div>
    </ApolloProvider>
  )
}

export default App
