import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header';
import { auth } from './firebase/firebase.util';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import SignInUp from './pages/signinup';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
