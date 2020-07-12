import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post('api/auth/loginUser', { email, password })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          {/* Start Form Login Page */}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Sign In</h3>

            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter e-mail'
              />
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter password'
              />
            </div>

            <button type='submit' className='btn btn-primary btn-block'>
              Login
            </button>
            <p className='forgot-password text-right'>
              Don't have an account? <a href='../sign-up'>SignUp</a>
            </p>
          </form>
          {/* End Form Login Page */}
        </div>
      </div>
    );
  }
}

export default Login;
