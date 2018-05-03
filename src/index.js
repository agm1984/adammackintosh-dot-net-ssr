import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import client from './components/apolloClient'
import store, { history } from './store'
import Routes from './Routes'
// import registerServiceWorker from './registerServiceWorker'
import './index.css'

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
)

// registerServiceWorker()
