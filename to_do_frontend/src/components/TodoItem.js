import React, { Component } from 'react'
import {connect} from 'react-redux';
import { todoByIdSelector } from '../store/todos/selectors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { editTodo } from '../store/todos/actionCreators';
import InputLabel from '@material-ui/core/InputLabel';

const priorities = {1: 'Low', 2: 'Medium', 3: 'High'};

class TodoItem extends Component {
    constructor() {
        super();

        this.state = {
            open: false,
            title: '',
            description: '',
            newTitle: '',
            newDescription: '',
            priority: 1,
            newPriority: 1,
            completed: 0,
            titleEmpty: false,
            descriptionEmpty: false
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isEmptyOrSpaces = this.isEmptyOrSpaces.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const todo = this.props.getTodoById(id);
        this.setState({
            id: id,
            title: todo.title,
            description: todo.description,
            newTitle: todo.title,
            newDescription: todo.description,
            priority: todo.priority,
            newPriority: todo.priority,
            completed: todo.completed,
        });
    }
    isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }
    
    setOpen(open) {
        this.setState({
            open
        })
    }
    handleClose() {
        this.setState({
            newDescription: this.state.description,
            newTitle: this.state.title,
            newPriority: this.state.priority,
            titleEmpty: false,
            descriptionEmpty: false
        });
        this.setOpen(false);
    }
    handleClickOpen() {
        this.setOpen(true);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit() {
        const newTodo = {
            id: this.state.id,
            title: this.state.newTitle,
            description: this.state.newDescription,
            priority: this.state.newPriority,
        }
        if(this.isEmptyOrSpaces(newTodo.title) || this.isEmptyOrSpaces(newTodo.description)) {
            this.setState({
                titleEmpty: this.isEmptyOrSpaces(newTodo.title),
                descriptionEmpty: this.isEmptyOrSpaces(newTodo.description)
            });
        } else {
            this.props.editTodo(newTodo, this);
            this.handleClose();
        }
    }
    render() {
        return (
            <div className="container card mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{ this.state.title } </h5>
                            <p className="card-text"> { this.state.description } </p>
                            <p className="card-text"> Priority: { priorities[this.state.priority] } </p>
                            { this.state.completed === 0 ? (
                                <p className="text-danger">Not completed </p>
                            ) : (
                                <p className="text-success"> Completed </p>
                            )}
                        </div>
                    </div>
                    <div className="col col-lg-2">
                    <Button className="mt-4" variant="contained" color="primary" onClick={this.handleClickOpen}>
                        Edit
                    </Button>
                    </div>
                    <Dialog open={this.state.open} onClose={this.handleClose} fullWidth={true}>
                        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Change todo information
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="text"
                            name="newTitle"
                            onChange={this.handleChange}
                            value={this.state.newTitle}
                            fullWidth
                        />
                        {this.state.titleEmpty ? (
                            <InputLabel error>Title can't be empty</InputLabel>
                        ) : (null)}
                        <TextField
                            margin="dense"
                            id="name"
                            label="Description"
                            type="text"
                            name="newDescription"
                            onChange={this.handleChange}
                            value={this.state.newDescription}
                            fullWidth
                        />
                        {this.state.descriptionEmpty ? (
                            <InputLabel error>Description can't be empty</InputLabel>
                        ) : (null)}
                        <InputLabel className="mt-3" htmlFor="newPriority">Priority</InputLabel>
                        <select 
                        name="newPriority" 
                        onChange={this.handleChange} 
                        className="priority"
                        value={this.state.newPriority}
                        >
                            <option key={1} value={1}>LOW</option>
                            <option key={2} value={2}>MEDIUM</option>
                            <option key={3} value={3}>HIGH</option>
                        </select>                        
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={this.handleSubmit} color="primary">
                            Save changes
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        getTodoById: todoByIdSelector(state)
    };
}

const mapDispatchToProps = {
    editTodo: editTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)