import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
            <nav className="z-depth-0">
              <div className="nav-wrapper white">
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none'
                  }}
                  className="col s5 brand-logo right teal"
                >
                  FIN-TRACK
                </Link>
              </div>
            </nav>
          </div>
        )
    }
}

export default  Navbar