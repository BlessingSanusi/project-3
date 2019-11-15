import React, { Component } from 'react'

class Login extends Component {
    constructor (){
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push("/dashboard");
        }

        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            })
        }
    }


    render() {
        return (
            <div>
               <form>
                   <input type="email"
                   name = "email"
                   value = {this.state.email}
                   onChange = {this.handleChange}
                   
                   />

                <input type="password"
                   name = "password"
                   value = {this.state.password}
                   onChange = {this.handleChange}
                   
                   />

<button type="submit" className="btn btn-primary">Submit</button>
               </form>
                
            </div>
        )
    }
}

export default Login