import React, { Component } from 'react';
import { API_KEY } from '../config/googleApi';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // Initialize gapi lib
    window.gapi.load('client:auth2', () => {
      window.gapi.auth2
        .init({
          client_id: API_KEY,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // listen() method can immediately respond to 
          // changes in auth2.isSignedIn and auth2.currentUser
          this.auth.isSignedIn.listen(this.onAuthChange);// return boolean value
        });
    });
  }

  onAuthChange = value => {
    this.setState({ isSignedIn: value });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>null</div>;
    } else if (this.state.isSignedIn === true) {
      return <button onClick={() => this.auth.signOut()}>Sign out</button>;
    } else {
      return <button onClick={() => this.auth.signIn()}>Sign in</button>;
    }
  }

  render() {
    console.log(this.state);
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
//Client-ID:953547866787-84l82sks23sj7mfgnqa79hkns4934ft8.apps.googleusercontent.com
