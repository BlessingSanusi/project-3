import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div>
               
                        <form>

                            <div className="form-group py-1">
                            <input type="name" className="form-control"
                   name = "name"
                   placeholder="Full Name"

                //    value = {this.state.email}
                //    onChange = {this.handleChange}
                   
                   />
                            </div>
                      
                      <div className="form-group py-1">
                      <input type="email" className="form-control"
                   name = "email"
                   placeholder="Email"
                //    value = {this.state.email}
                //    onChange = {this.handleChange}
                   
                   />

                      </div>

                      <div className="form-group py-1">
                      <input type="password"
                   name = "password"
                   className="form-control"
                   placeholder="Password"
                //    value = {this.state.password}
                //    onChange = {this.handleChange}
                   
                   />
                      </div>
                  
            <div className="form-group py-1">
            <input type="password"
                   name = "password2"
                   className="form-control input-lg"
                   placeholder="Confirm Password"
                //    value = {this.state.password}
                //    onChange = {this.handleChange}
                   
                   />

            </div>
       <div className="text-center">
       <button type="submit" className="btn btn-primary btn-lg pt-2">Register</button>
           </div>        

<p className="text-center pt-1">Already have an account? <span className="text-success">Sign In</span></p>
               </form>
                
                        </div>
        
        )
    }
}

export default Register