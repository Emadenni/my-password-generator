import React, { useState } from "react";
import InputField from "../../components/inputField";
import Layout from "../../components/Layout/Layout"; 
import Logo from "../../assets/images/Logo.svg";
import "./signup.scss";

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <button className="login-button">Login</button>
    <Layout
      logo={<img src={Logo} alt="Logo" className="signup-logo" />} 
      title="SIGN UP" 
      titleClassName="signup-title" 
      buttonLabel="SIGN UP" 
      onButtonClick={handleSignup}
    >

      
      <h2 className="signup-subtitle">CREATE YOUR ACCOUNT</h2>
      <InputField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        required
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
    </Layout>
    </div>
  );
};

export default Signup;
