import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './redux/actions/authActions';
import PrivateRoute from './PrivateRoute';
import Feed from './pages/Feed';
import Profile from './pages/Profile'
import Post from './pages/Post';
import NewPost from './pages/NewPost';


const App = ({ dispatch }) => {
  if (localStorage.token){
    const token = localStorage.token;
    setAuthToken(token);
    dispatch(setCurrentUser(token))
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} /> 
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/feed" component={Feed} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/feed/newpost" component={NewPost} />
        <Route path="/feed/post" component={Post} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // messages: state.messageReducer.messages,
    // text: state.messageReducer.text,
  };
};

export default connect(mapStateToProps)(App);
