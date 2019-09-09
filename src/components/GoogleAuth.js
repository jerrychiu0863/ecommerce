import React, { Component } from 'react';
import { API_KEY } from '../config/googleApi';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

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
          // Check user signin status
          this.onAuthChange(this.auth.isSignedIn.get());
          // listen() method can immediately respond to
          // changes in auth2.isSignedIn and auth2.currentUser
          this.auth.isSignedIn.listen(this.onAuthChange); // return boolean value
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.auth.isSignedIn === null) {
      return null;
    } else if (this.props.auth.isSignedIn === true) {
      return (
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => this.auth.signOut()}
        >
          Sign out
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => this.auth.signIn()}
        >
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderAuthButton()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

