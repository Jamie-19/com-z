// components/Login.js
/*import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Sidebar from './sidebar'; // Update the import

const Login = ({ setIsUserLoggedIn }) => {
  const router = useRouter();

  // State to manage username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // This effect will run only on the client side
    setUsername('');
    setPassword('');
  }, []);

  const handleSignIn = () => {
    // Basic validation - check if both username and password are provided
    if (username && password) {
      // Simulate a simple authentication check (replace with actual authentication logic)
      const isValidUser = true; // Replace with your authentication logic

      if (isValidUser) {
        // Update the state to indicate that the user is logged in
        setIsUserLoggedIn(true);

        // Redirect to the sidebar page
        router.push('/sidebar'); // Update the path
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="app">
      <div className="login">
        <div className="login__background" />
        <div className="login__container">
          <img src="/logo.png" alt="Logo" />
          <div className="login__text">
            <h1>Sign in to Comm-Z</h1>
          </div>
          {/* Input fields for username and password */
        /*  <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Call handleSignIn when the button is clicked */
        /*  <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;*/
