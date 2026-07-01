import DeeBox from '../../../icon/mobile-logo.png';
import SearchLogo from '../../../icon/search-icon.png';
import CartLogo from '../../../icon/cart-icon.png';
import { Link } from 'react-router';
import "./navSection.css";



export function NavSection ({cart}) {
  let totalQuantity = 0;

  cart.forEach((cartQuantity)=>{
    totalQuantity= totalQuantity + cartQuantity.quantity;
    });

  return (
    <>
      <section>
        <div className="nav-container">
          <div className="left-section">
            <img src={DeeBox}  className='deebox-logo'/>
            Dee<span className="dee-box">Box</span>
          </div>
          
          <div className="middle-section">
            <input type="text" className="input-box" placeholder='Search for a Movie'/>
            <button className='search-button'>
              <img src={SearchLogo} className='search-logo' />
            </button>
          </div>

          <div className="right-section">
            <div className='cart-container' >
              <img src={CartLogo} className='cart-logo' />
              <div className='cart-quantity'>{totalQuantity}</div>
            </div>

            <div className='cart-name'>
              Cart
            </div>
            <div className='logout-container'>
              <Link to="/" className='logout'>Log out</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}