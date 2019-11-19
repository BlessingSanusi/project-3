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

        const { user } = this.props.auth;
        return (
            <div>
                <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">FIN-TRACK</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li> <h4>
              <b>Welcome,</b> {user.name.split(" ")[0]}
            </h4></li>
        <li><a href="">Log Out</a></li>
      </ul>
    </div>
  </nav>
        
            </div>
        )
    }
}
