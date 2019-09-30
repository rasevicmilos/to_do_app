import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, finishTodo } from '../store/todos/actionCreators';
import AddDialog from '../components/AddDialog';
import { Checkbox } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Maximize from '@material-ui/icons/Maximize';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            showSorted: false,
            filterUnchecked: false,
            open: false,
            idToDelete: 0
        }

        this.showTodo = this.showTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.priorityIcon = this.priorityIcon.bind(this);
        this.toggleSort = this.toggleSort.bind(this);
        this.sortByProperty = this.sortByProperty.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
    }
    componentDidMount() {
        this.props.fetchTodos();
    }
    showTodo(todoId) {
        this.props.history.push('/todo/' + todoId);
    }
    handleDelete(todoId) {
        this.setState({
            open: true,
            idToDelete: todoId
        })
    }
    handleChangeComplete(todo, completed) {
        todo.completed = !completed;
        this.props.finishTodo(todo);
    }
    toggleSort() {
        this.setState({
            showSorted: !this.state.showSorted
        })   
    }
    toggleFilter() {
        this.setState({
            filterUnchecked: !this.state.filterUnchecked
        })
    }
    sortByProperty(array, propertyName) {
        return array.sort(function (a, b) {
            return b[propertyName] - a[propertyName];
        });
    }
    priorityIcon(priority) {
        switch(priority) {
            case 1: 
                return (
                    <ArrowDownward color="primary"></ArrowDownward>
                )
            case 2: 
                return (
                    <Maximize className="minus"></Maximize>
                )
            case 3: 
                return (
                    <ArrowUpward color="error"></ArrowUpward>
                )
            default: 
                return (
                    <div>Unknown priority</div>
                )
        }
    }
    confirmDelete() {
        this.props.deleteTodo(this.state.idToDelete);
        this.cancelDelete(0);
    } 
    cancelDelete() {
        this.setState({
            open: false,
            idToDelete: 0
        })
    }
    render() {
        var todoList = [...this.props.todos];
        if (this.state.showSorted) {
            todoList = this.sortByProperty(todoList, "priority");
        } 
        if (this.state.filterUnchecked) {
            todoList = todoList.filter(todo => todo.completed === 0);
        }
        var todos = 'No todos!';
        if (todoList.length !== 0){
            todos = todoList.map(todo =>
                <li 
                className={todo.completed === 0 ? ("list-group-item") : ("list-group-item text-muted bg-light")}
                key={todo.id} 
                >
                <div className="container">
                    <div className="row" >
                        <div className="col col-md-1">
                            <Checkbox
                                checked={todo.completed === 1 ? true : false}
                                onChange={() => this.handleChangeComplete(todo, todo.completed)}
                                color="primary"
                            />
                        </div>
                        <div className="col md-4"
                        onClick={() => this.showTodo(todo.id)}
                        >
                            <div className="card-title">
                                {todo.title}
                            </div>
                            {todo.description}
                        </div>
                        <div className="col col-md-1 col-lg-1 pt-3">
                            {this.priorityIcon(todo.priority)}
                        </div>
                        <div className="col col-md-2 col-lg-1">
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
                <div>
                <AddDialog/>
                { this.state.showSorted ? (
                    <button 
                    onClick={this.toggleSort} 
                    className="btn btn-primary float-right mr-3"
                    >
                        Sort by priority
                    </button>
                ) : (
                    <button 
                    onClick={this.toggleSort} 
                    className="btn btn-secondary float-right mr-3"
                    >
                        Sort by priority
                    </button>
                ) }
                { this.state.filterUnchecked ? (
                    <button 
                    onClick={this.toggleFilter} 
                    className="btn btn-primary float-right mr-3"
                    >
                        Filter unchecked
                    </button>
                ) : (
                    <button 
                    onClick={this.toggleFilter} 
                    className="btn btn-secondary float-right mr-3"
                    >
                        Filter unchecked
                    </button>
                ) }

                </div>
                <ul className="list-group mt-5">
                    {todos}
                </ul>
                <Dialog open={this.state.open} onClose={this.cancelDelete} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Confirm</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this todo?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.cancelDelete} color="primary">
                    No
                </Button>
                <Button variant="contained" onClick={this.confirmDelete} color="primary">
                    Yes
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
    fetchTodos: fetchTodos,
    deleteTodo: deleteTodo,
    finishTodo: finishTodo
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))