import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

function SignInUpForm() {
  const navigate = useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform your login logic here
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Check if email and password are valid
    if (email === 'example@example.com' && password === 'password') {
      // Redirect to the welcome page
      navigate('/welcome');
    } else {
      // Handle invalid login credentials
      alert('Invalid email or password');
    }
  };

  return (
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="#">
        <h1>Create Account</h1>
          <br></br>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <br></br>
          <span>or use social media for registration</span>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f" style={{ color: 'white' }}></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g" style={{ color: 'white' }}></i></a>
            <a href="#" className="social"><i className="fab fa-twitter" style={{ color: 'white' }}></i></a>
          </div>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Log in</h1>
          <br></br>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
          <br></br>
          <span>or use social media for login</span>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f" style={{ color: 'white' }}></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g" style={{ color: 'white' }}></i></a>
            <a href="#" className="social"><i className="fab fa-twitter" style={{ color: 'white' }}></i></a>
          </div>
        
        </form>
         
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>Log In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <br></br>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInUpForm;
