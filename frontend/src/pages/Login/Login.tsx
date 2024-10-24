import React, { useState } from "react";
import { Link } from 'react-router-dom';
import InputField from "../../components/inputField";
import Layout from "../../components/Layout/Layout"; 
import Logo from "../../assets/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import "./login.scss"



const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    navigate("/storage");
  };

  return (
    <div className="login-container">
      <Link to="/" ><button className="login-button">Signup</button></Link>
    <Layout
      logo={<img src={Logo} alt="Logo" className="signup-logo" />} 
      title="NEW MY-PG" 
      titleClassName="signup-title" 
      buttonLabel="SIGN UP" 
      onButtonClick={handleLogin}
    >

      
      <h2 className="login-subtitle">CREATE YOUR ACCOUNT</h2>
      <InputField
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        required
        inputClassName="signup-input"
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
        inputClassName="login-input"
      />
    </Layout>
    </div>
  );
};


export default Login