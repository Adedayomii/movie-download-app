import './checkout.css';
import TestImage from '../../../public/images/emotional.avif';


export function Checkout () {
  return (
    <section className='checkout-page'>
      <div className="checkout-grid">
        <div className="selected-product">
          <div className="product">
            <p className='selected-movie'>Selected Movie</p>
            <div className='selected-move-details'>
              <img src={TestImage} className='testImage' />
              <div className='movie-name-price'>
                <p className='movie-name'>This is it</p>
                <p className='movie-price'>Price: $100</p>
                <button>Delete</button>
              </div>
            </div>
          </div>

        </div>

        <div className="summary-section"> 
          <p className='order-summary'>Order Summary</p>
          <p>Item (3): <span className='order-price'>$5.00</span></p>
          <p>Estimated Tax (10%): <span className='order-tax'>$0.50</span></p>
          <p>Order Total: <span className='order-total'>$5.50</span></p>
          <button className='place-your-order'>Place your order</button>
        </div>
      </div>
    </section>
  );
}