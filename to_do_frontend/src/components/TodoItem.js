import React from 'react'
import {connect} from 'react-redux';
import { todoByIdSelector } from '../store/todos/selectors';
 
function TodoItem({getTodoById, match}) {
    const { id } = match.params;

    const todo = getTodoById(id);

    const priorities = {1: 'Low', 2: 'Medium', 3: 'High'};

    return todo ? (
        <div className="container">
            <h2> </h2>
            <p>  </p>
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ todo.title } </h5>
                <p className="card-text"> { todo.description } </p>
                <p className="card-text"> Priority: { priorities[todo.priority] } </p>
                { !todo.completed ? (
                    <p className="text-danger">Not completed </p>
                ) : (
                    <p className="text-success"> Completed </p>
                )}
            </div>
            </div>
        </div>
    ) : (
        <div>
            <h1>Not found</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        getTodoById: todoByIdSelector(state)
    };
}

export default connect(mapStateToProps)(TodoItem)