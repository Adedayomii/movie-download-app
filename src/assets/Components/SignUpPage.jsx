import { Link } from 'react-router';
import './signuppage.css';

export function SignUpPage () {
  return (
      <>
          <section>
              <div className="signup-container">
                <div className='container'>
                  <div className="signup-form">
                      <h1 className='signup-heading'>Sign Up</h1>
                  </div>

                  <div className="details-container">
                    <input type="text" placeholder='First Name' className='input-details'/>
                    <input type="text" placeholder='Last Name' className='input-details'/>
                    <input type="email"  placeholder='Email' className='input-details'/>
                    <input type="password" placeholder='Password' className='input-details'/>
                    <input type="password" placeholder='Confirm Password' className='input-details'/>
                    <button className='signup-button'>Sign Up</button>
                  </div>
                  <div className="redirect-to-login">
                    Already have an account? <Link to="/"className="login">Log In</Link>
                  </div>

                </div>
                  

              </div>
          </section>
      </>   
  );
}