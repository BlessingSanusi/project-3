import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand brand" href="/">
                    
                    FIN-<span className="text-success">TRACK</span><i class="fas fa-wallet"></i>
                    </a>
                    
                   
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a href="/login" className="nav-link btn btn-success">
                  Sign In
              </a>
          </li>
      </ul>
  </div>

                </nav>
                
            </div>
        )
    }
}

export default  Navbar