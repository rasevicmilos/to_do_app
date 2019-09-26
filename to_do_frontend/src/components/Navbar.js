import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginApiService from '../apiServices/LoginApiService';
import { logOut } from '../store/user/actionCreators';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor() {
        super();

        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        console.log(this.props);
        this.props.logOut();
    }
    render() {
        const user = this.props.user;
        return (  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Todos</Link>
                <div className="">
                    {!user ? (
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign up</Link>
                        </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        {/* <a className="nav-link" href="" tabindex="-1" aria-disabled="true">Logout</a> */}
                            <Link className="nav-link" to='/login' onClick={this.logOut}>Logout</Link>
                        </li>
                        </ul>
                    )}
                </div>
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
