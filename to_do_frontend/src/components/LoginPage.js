import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../store/user/actionCreators';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.logIn(this.state);
    }
    render() {
        return (
            <div className="container px-5">
                <div className="card mt-5 mx-5 pt-3 px-3 pb-3">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputEmail" 
                            className="pl-2"
                            >Email address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            onChange={this.handleChange} 
                            id="inputEmail" 
                            value={this.state.email} 
                            placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" 
                            className="pl-2"
                            >Password</label>
                            <input type="password" 
                            className="form-control" 
                            name="password" 
                            onChange={this.handleChange} 
                            id="inputPassword" 
                            value={this.state.password} 
                            placeholder="Password"/>
                        </div>
                        <button type="submit" 
                        className="btn btn-primary"
                        >Log in</button>
                        </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    logIn: logIn
}

export default connect(null,mapDispatchToProps)(LoginPage)
