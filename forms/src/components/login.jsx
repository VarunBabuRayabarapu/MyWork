import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Joi } from 'joi-browser';
import Input from './input';
class Login extends Component {
    state = {
        accounts:{
            username:"",
            password:""
        },
        errors:{
        }
    };
    /*schema ={
        username:Joi.string().required(),
        password:Joi.string().required()
    };*/
    validate=()=>{
        const {accounts} = this.state;
        //let re=Joi.validate(accounts,this.schema);
        //console.log(re);
        var errors={};
        if (accounts.username.trim()===""){
            errors.username="username cant be empty ";
        };
        if (accounts.password.trim()===""){
            errors.password="password cant be empty ";
        }
        return Object.keys(errors).length===0 ?null :errors;
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.setState({errors:this.validate() || {}});
    };
    handleChange=e=>{
        var accounts={...this.state.accounts};
        console.log(e);
        accounts[e.currentTarget.name]=e.currentTarget.value;
        this.setState({accounts});
    };
    render() { 
        return (
            <div className='container'>
                <h1 className='text-center'>LoginPage</h1>
                <form onSubmit={this.handleSubmit} >
                    <Input
                        name="username"
                        label="Username"
                        value={this.state.accounts.username}
                        type="text"
                        onChange={this.handleChange}
                        error={this.state.errors.username}
                    />
                    <Input
                        name="password"
                        label="Password"
                        value={this.state.accounts.password}
                        type="password"
                        onChange={this.handleChange}
                        error={this.state.errors.password}
                    />
                    <br/>
                    <button disabled={this.validate()} type="submit"  className='btn btn-primary'>LOGIN</button>
                </form>
            </div>
        );
    }
}
 
export default Login;