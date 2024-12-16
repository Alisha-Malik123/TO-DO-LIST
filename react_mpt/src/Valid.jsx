import React, { useState } from 'react';

function Valid() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailValue)); // Simple email regex validation
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsPasswordValid(passwordValue.length >= 8); // Password must be at least 8 characters
  };

  return (
    <div>
      <form>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ borderColor: isEmailValid ? 'black' : 'red' }}
          />
          {!isEmailValid && <p style={{ color: 'red' }}>Invalid email</p>}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ borderColor: isPasswordValid ? 'black' : 'red' }}
          />
          {!isPasswordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters</p>}
        </div>
        <button type="submit" disabled={!isEmailValid || !isPasswordValid}>Submit</button>
      </form>
    </div>
  );
}

export default Valid;