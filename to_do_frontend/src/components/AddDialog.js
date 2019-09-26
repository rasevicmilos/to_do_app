import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { createTodo } from '../store/todos/actionCreators';

const priorities = {'LOW': 1, 'MEDIUM': 2, 'HIGH': 3}

class AddDialog extends Component {
    constructor() {
        super();
        

        this.state = {
            open: false,
            priority: 1,
            title: '',
            description: ''
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    setOpen(open) {
        this.setState({
            open
        })
    }
    handleClose() {
        this.setOpen(false);
    }
    handleClickOpen() {
        this.setOpen(true);
    }
    handleSubmit() {
        const todo = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
            completed: 0
        }
        this.props.createTodo(todo);
        this.reset();
    }
    handlePriorityChange(e) {
        this.setState({
            [e.target.name]: priorities[e.target.value]
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    reset() {
        this.setState({
            open: false,
            priority: 1,
            title: '',
            description: ''
        })
    }
    render() {
        return (
            <div>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                Add a new todo
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Enter new todo information
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description}
                    fullWidth
                />
                <InputLabel className="mt-3" htmlFor="priority">Priority</InputLabel>
                <select name="priority" 
                    onChange={this.handlePriorityChange} 
                    className="priority">
                        <option>LOW</option>
                        <option>MEDIUM</option>
                        <option>HIGH</option>
                </select>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" onClick={this.handleSubmit} color="primary">
                    Add
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = {
    createTodo: createTodo
}

export default connect(null,mapDispatchToProps)(AddDialog)