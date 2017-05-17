import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      username: "",
      password: ""
    };
    
  }

  usernameHandler(event){
    // console.log(event.target)
    this.setState({
      username: event.target.value
    })
  }
  passwordHandler(event){
    this.setState({
      password: event.target.value
    })
  }

  submitForm(event){
    event.preventDefault();
    // debugger
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameHandler.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordHandler.bind(this)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}
