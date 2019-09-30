import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../store/user/actionCreators';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor() {
        super();

        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        this.props.logOut();
    }
    render() {
        const user = this.props.user;
        return (  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/home">Todos</Link>
                    {!user ? (
                        <div>
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign up</Link>
                        </li>
                        </ul>
                        </div>
                    ) : (
                        <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <button className="btn btn-outline-light" onClick={this.logOut}>Logout</button>
                        </li>
                        </ul>
                        <span className="navbar-brand">
                            User: {user.name}                        
                        </span>
                        </div>
                    )}
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    logOut: logOut
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
