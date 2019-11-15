import React, { Component } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <div>
                 <div class="col-sm-3 px-1 bg-dark min-vh-100">
            <div class="py-2 sticky-top flex-grow-1">
                <div class="nav flex-sm-column">
                    <a href="" class="nav-link d-none d-sm-inline">Dashboard</a>
                    <a href="" class="nav-link">Transactions</a>
                    <a href="" class="nav-link">Bills/Payment</a>
                    <a href="" class="nav-link">Settings</a>
                    
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default Sidebar;