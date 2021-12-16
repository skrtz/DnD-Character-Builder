import { React, useState } from 'react';
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import Header from './components/Header/index';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import CreateChar from './pages/CreateChar';
import UpdateChar from './components/UpdateChar';
// import diceComponent from './components/diceComponent'
// import { QUERY_CHAR } from './utils/queries';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri: "/graphql"
});

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  // const { loading, data } = useQuery(QUERY_CHAR);


  // const searchCharacter = async (search) => {
  //   setSearch(search);
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // searchCharacter(search);
    // console.log(search);
    setSearch('');
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setSearch(inputValue);
    setResult(inputValue);
  };
  console.log(result);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            <div style={{ maxWidth: "fit-content", margin: "0 auto", minWidth: "170px" }}>
              <Route exact path="/">
                <Home
                  value={result}
                />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/CreateChar">
                <CreateChar />
              </Route>
              <Route exact path="/updateChar" component={UpdateChar} />
            </div>
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App;