import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LandingImage from "../../../images/landingpage.png"
import AppleStore from "../../../images/appstore.png"
import GooglePlay from "../../../images/googleplay.png"
import './landingstyle.css'
import { display } from '@material-ui/system';

class Landing extends Component {
    componentDidMount() {
        // If logged in, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

handleSubmitBtn = (e) => {
e.preventDefault();

}

    render() {
        return (
            <div>
       
                <div className="row">
                  
                    <div className="col s8">
                    <div>
                        <h1 className="landingText left-align mt-5 ml-5">Keep Track Of Your Expenses And Stay Ahead Of Your Bills</h1>
                        </div>
                   

                   <br/><br/>
                        <div className="left-align ml-5">

                        
                        <Link
                to="/register"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  
                }}
                className="btn btn-large waves-effect waves-light hoverable light-blue darken-3"
              >
                Register
              </Link>
                     

                       
                        <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>

              </div>

                       <br/><br/><br/><br/>

                       <div class="picRow mr-5 pr-5">
    <div className="pic">
    <img src={AppleStore} className="applestore" alt="AppleStore" />
    </div>  
    <div className="pic">
    <img src={GooglePlay} className="GooglePlay" alt="GooglePlay" />
    </div>
</div>
{/* 
                    <div >
                    <div >
                        
                        </div>

                        

                        <div >
                        <img src={GooglePlay} className="GooglePlay" alt="GooglePlay" />
                        </div>
                    </div> */}
                        
                    </div>
                    <div className="col s4 mr-5">
                        
                        <img src={LandingImage} className="landingImg" alt="landingImge" />
                        
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(mapStateToProps)(Landing);