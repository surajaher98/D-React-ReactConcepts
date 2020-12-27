import './App.css';
import HeaderComponent from './component/header/HeaderComponent';
import LoginComponent from './component/login/LoginComponent';
import { EventContextProvider } from './component/contextAPI/EventContext';
import PageNotFoundComponent from './component/pageNotFound/pageNotFoundComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignupComponent from './component/signup/signupComponent';
import { Container } from '@material-ui/core';
import ErrorBoundary from './component/ErrorBoundary';
import ViewUsersComponent from './component/ViewUsers/viewUsersComponent';
import SportifyComponent from './component/sportify/sportifyComponent';
import MusicComponent from './component/music/musicComponent';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  // code for subling component communication

  const searchHandler = (value) => {
    setSearchValue(value);
  }

  return (
    <div className="App">
      <Router>
        <EventContextProvider>
          <ErrorBoundary>
            <HeaderComponent searchValue={searchValue} searchHandler={searchHandler} />
          </ErrorBoundary>
          <Container maxWidth="lg">
            <Switch>
              <Route path="/signup">
                <ErrorBoundary>
                  <SignupComponent />
                </ErrorBoundary>
              </Route>
              <Route path="/login">
                <ErrorBoundary>
                  <LoginComponent />
                </ErrorBoundary>
              </Route>
              <Route
                exact
                path="/viewUsers">
                <ErrorBoundary>
                  <ViewUsersComponent searchValue={searchValue} />
                </ErrorBoundary>
              </Route>
              <Route
                exact
                path="/sportify">
                <ErrorBoundary>
                  {/* <SportifyComponent/> */}
                  <MusicComponent />
                </ErrorBoundary>
              </Route>
              <Route
                exact
                path="/">
                <ErrorBoundary>
                  <LoginComponent />
                </ErrorBoundary>
              </Route>
              <Route component={PageNotFoundComponent} />
            </Switch>
          </Container>
        </EventContextProvider>
      </Router>
    </div>
  );
}

export default App;
