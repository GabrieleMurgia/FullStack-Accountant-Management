import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter}  from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
root.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
   <Provider store={store}>
   <BrowserRouter>
   <App />
   </BrowserRouter>
   </Provider>
   </ApolloProvider>
  </React.StrictMode>
);

