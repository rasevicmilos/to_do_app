import React, { Component } from 'react';
import TodoList from './TodoList';
import { getUser } from '../store/user/actionCreators';
import { connect } from 'react-redux';


class HomePage extends Component {
    componentDidMount() {
        this.props.getUser(localStorage.getItem('access_token'));
    }
    render() {
        return (
            <div>
                <TodoList></TodoList>
            </div>
        )
    }
}


const mapDispatchToProps = {
    getUser: getUser
}


export default connect(null, mapDispatchToProps)(HomePage)
