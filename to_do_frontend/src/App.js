import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import { connect } from 'react-redux';
import NonAuthenticatedRoute from './components/NonAuthenticatedRoute';
import TodoItem from './components/TodoItem';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Router>
            <Navbar></Navbar>
            <NonAuthenticatedRoute 
              path='/login' 
              component={LoginPage}
              token={localStorage.getItem('access_token')}>
            </NonAuthenticatedRoute>
            <NonAuthenticatedRoute 
              path='/register' 
              component={RegistrationPage}
              token={localStorage.getItem('access_token')}>
            </NonAuthenticatedRoute>
            <ProtectedRoute 
              exact 
              path='/home'
              token={localStorage.getItem('access_token')}
              component={HomePage}>
            </ProtectedRoute>
            <ProtectedRoute 
              exact 
              path='/todo/:id'
              token={localStorage.getItem('access_token')}
              component={TodoItem}>
            </ProtectedRoute>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(App);

