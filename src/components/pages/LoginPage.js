import React from "react";
import LoginFrom from '../forms/LoginForm';

class LoginPage extends React.Component {

  submit = (data) => {
    console.log("love you", data);
  };

  render() {
    return (
      <div>
          <h1>Login Page</h1>

          <LoginFrom submit={this.submit} />
      </div>
    );
  }
}
//
// const LoginPage = () => (
//     <div>
//         <h1>Login Page</h1>
//
//         <LoginFrom submit={this.submit} />
//     </div>
// );

export default LoginPage;
