import React, { Component } from 'react'
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

import Register from '../../components/auth/Register'
import LandingImage from "../../images/landingpage.png"
import AppleStore from "../../images/appstore.png"
import GooglePlay from "../../images/googleplay.png"
import './landingstyle.css'

class Landing extends Component {
    // componentDidMount() {
    //     // If logged in, should redirect them to dashboard
    //     if (this.props.auth.isAuthenticated) {
    //       this.props.history.push("/dashboard");
    //     }
    //   }

handleSubmitBtn = (e) => {
e.preventDefault();

}

    render() {
        return (
            <div>
       
                <div className="row">
                    <div className="col-lg-8 pt-3">
                        <div className="landingText mt-5 ml-5">
                        <h1>Stay ahead of your bill and keep track of your expenses</h1>
                        </div>
                        <img src={LandingImage} className="landingImg" alt="landingImge" />
                        
                    </div>
                    <div className="col-lg-4 pt-5">
                    <div className="mt-5 mr-5 pt-5">
                        <Register 
                        handleSubmitBtn = {this.handleSubmitBtn}                        />
                        </div>
                       
                    <div className="row text-center mt-5 pt-5">
                    <div className="col-md-5">
                        <img src={AppleStore} className="applestore" alt="AppleStore" />
                        </div>

                        

                        <div className="col-md-5">
                        <img src={GooglePlay} className="GooglePlay" alt="GooglePlay" />
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing