import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import FavFlowers from './components/FavFlowers';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    const{isAuthenticated}=this.props.auth0;
    console.log('app', this.props);
    
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">

                {!isAuthenticated ? <Login/> : <Home/>}
              </Route>
              <Route exact path="/favFlowers">
              {!isAuthenticated ? <Login/> : < FavFlowers/>}
                {/* TODO: if the user is logged in, render the `FavFlowers` component, if they are not, render the `Login` component */}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
