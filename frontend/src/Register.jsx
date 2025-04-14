import React, { useState } from 'react';
import './Register.css';

import usericon from './user.png';
import emailicon from './mail.png';
import pswdicon from './pswd.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedType, setSelectedType] = useState(''); 

  const handleRegister = () => {
    if (username && email && password && selectedType) {
      alert(`Registered as ${selectedType}`);
      setUsername('');
      setEmail('');
      setPassword('');
      setSelectedType('');
    } else {
      alert('Please fill all fields and select a role');
    }
  };

  return (
    <div className="bigbox">
      <div className="mainbox">
        <h3>REGISTER YOURSELF!</h3>

        {/* Radio button section */}
        <div className="name">
          <h4>Register as:</h4>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                value="farmers"
                checked={selectedType === "farmers"}
                onChange={(e) => setSelectedType(e.target.value)}
                name="userType"
              />
              Farmers
            </label>
            <label>
              <input
                type="radio"
                value="retailers"
                checked={selectedType === "retailers"}
                onChange={(e) => setSelectedType(e.target.value)}
                name="userType"
              />
              Retailers
            </label>
            <label>
              <input
                type="radio"
                value="ngos"
                checked={selectedType === "ngos"}
                onChange={(e) => setSelectedType(e.target.value)}
                name="userType"
              />
              NGOs
            </label>
            <label>
              <input
                type="radio"
                value="others"
                checked={selectedType === "others"}
                onChange={(e) => setSelectedType(e.target.value)}
                name="userType"
              />
              Others
            </label>
          </div>
        </div>

        {/* Input fields */}
        <div className="box">
          <div className="input-field">
            <label htmlFor="username"></label>
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <img src={usericon} alt="Username Icon" />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email"></label>
            <div className="input-wrapper">
              <img src={emailicon} alt="Email Icon" />
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="password"></label>
            <div className="input-wrapper">
              <img src={pswdicon} alt="Password Icon" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="reg">
            <button className="btn" onClick={handleRegister}>
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
