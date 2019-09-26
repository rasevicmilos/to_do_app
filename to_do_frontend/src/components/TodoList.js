import React, { Component } from 'react';
import TodosApiService from '../apiServices/TodosApiService';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../store/todos/actionCreators';
import AddDialog from '../components/AddDialog';

class TodoList extends Component {
    constructor() {
        super();

        this.showTodo = this.showTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        this.props.fetchTodos();
    }
    showTodo(todoId) {
        this.props.history.push('/todo/' + todoId);
    }
    handleDelete(todoId) {
        this.props.deleteTodo(todoId);
    }
    render() {
        const todoList = this.props.todos;
        var todos = 'No todos!';
        if (todoList.length != 0){
            todos = todoList.map(todo =>
                // <Link className="list-group-item" to={'/todo/' + todo.id}>{todo.title}</Link>
                <li 
                className="list-group-item" 
                key={todo.id} 
                >
                <div className="container">
                    <div className="row">
                        <div className="col"
                        onClick={() => this.showTodo(todo.id)}
                        >
                        <div className="card-title">
                            {todo.title}
                        </div>
                        {todo.description}
                        </div>
                        <div className="col col-lg-2">
                        <button 
                        className="btn btn-danger float-right mt-2"
                        onClick={() => this.handleDelete(todo.id)}
                        >
                        Delete
                        </button>
                        </div>
                    </div>
                </div>
                </li>
            );
        }
        return (
            <div className="container mt-3">
                {/* <button className="btn btn-primary mb-3">Add a new todo</button> */}
                <AddDialog/>
                <ul className="list-group mt-3">
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
    fetchTodos: fetchTodos,
    deleteTodo: deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)