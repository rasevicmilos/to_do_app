import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';
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
              user={this.props.user}>
            </NonAuthenticatedRoute>
            <NonAuthenticatedRoute 
              path='/register' 
              component={RegistrationPage}
              user={this.props.user}>
            </NonAuthenticatedRoute>
            <ProtectedRoute 
              exact 
              path='/'
              user={this.props.user}
              component={TodoList}>
            </ProtectedRoute>
            <ProtectedRoute 
              exact 
              path='/todo/:id'
              user={this.props.user}
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

