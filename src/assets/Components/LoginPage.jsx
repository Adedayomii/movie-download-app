import { Link } from 'react-router';
import './loginpage.css';

export function LoginPage () {
  return (
    <section>
      <div className="login-container">
        <div className="welcome-message">
          Welcome Back!
        </div>

        <div className="login-details">
          <p className='user-login'>USER LOGIN</p>
          <input type="email" placeholder='Email' className='email-container'/>
          <input type="password" placeholder='Password' className='password-container'/>
          <div className='forget-password-section'>
                <label className='remember_me'>
                    <input type="checkbox" />
                    <div className='rme'>Remember me</div>
                </label>

                <div className='forget_password'>Forget Password?</div>
          </div>
          
          <Link to="/download" className='login-to-download'>Log in</Link>

          <div className='create-account'>Don't have an Account? <Link to="/signup" className='sign-up'>Sign up</Link></div>
           
        </div>
      </div>
    </section>
  );
}