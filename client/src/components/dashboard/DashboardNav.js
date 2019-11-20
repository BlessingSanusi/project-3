import React, { Component } from 'react'
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getAccounts, addAccount } from "../../actions/accountActions";

export default class DashboardNav extends Component {
  // Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

    render() {

        // const { user } = this.props.auth;
        return (

                <nav>
    <div className="nav-wrapper teal">
      <a href="/" className="brand-logo">FIN-TRACK</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li> 
              <b>Welcome, User</b> 
            </li>
        <li><a href="/">Log Out</a></li>
      </ul>
    </div>
  </nav>
        
           
        )
    }
}
