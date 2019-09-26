import React, { Component } from 'react';
import TodosApiService from '../apiServices/TodosApiService';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/todos/actionCreators';

class TodoList extends Component {
    
    componentDidMount() {
        this.props.fetchTodos();
    }
    render() {
        const todoList = this.props.todos;
        console.log(this.props);
        var todos = 'No todos!';
        if (todoList.length != 0){
            todos = todoList.map(todo =>
                <li className="list-group-item" key={todo.id}>{todo.title}</li>
            );
        }
        return (
            <div className="container mt-3">
                <ul className="list-group">
                    {todos}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    fetchTodos: fetchTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)