import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

import { AuthProvider } from './auth/Authcontext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login';
import Repos from './pages/repos';
import SignUp from './pages/sign-up';
import { RecoilRoot } from 'recoil';

const client = new GraphQLClient({
  url: 'https://api.github.com/graphql',
});

function App() {
  return (
    <Router>
      <RecoilRoot>
        <ClientContext.Provider value={client}>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/">
                <Repos />
              </PrivateRoute>
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </AuthProvider>
        </ClientContext.Provider>
      </RecoilRoot>
    </Router>
  );
}

export default App;
