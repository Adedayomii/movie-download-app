import {movies} from '../../../../data/movies-list';
import {NavSection} from '../Shared/NavSection';


import './downloadpage.css';
import { useState } from 'react';


export function DownloadPage () {
  const [cart, setCart] = useState([]);
    
  function add_to_cart(event) {
  const productId = event.target.dataset.productId;

  let matchingMovie;

  cart.forEach((item) => {
    if (item.id === productId) {
      matchingMovie = item;
    }
  });

  if (matchingMovie) {

    const newCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }

      return item;
    });

    setCart(newCart);

  } else {

    setCart([
      ...cart,
      {
        id: productId,
        quantity: 1
      }
    ]);

  }
}
  return (
    <>
      <NavSection cart={cart}/>
      <section className='download-page'>
        <div className="movie-grid">
          {movies.map((movie)=>{
              return (    
                  <div className="movie-container" key={movie.id}>
                    <div className="image-container">
                      <img src={movie.image} className='movie-image'/>
                      
                      <div className="movie-duration">{movie.duration}</div>
                      </div>

                      <div className="movie-name-container">{movie.name}</div>

                      <div className="movie-price-container">${((movie.price)/100).toFixed(2)}</div>

                      <div className="add-to-cart-container">
                        <button className='cart-button' 
                                data-product-id={movie.id}
                                onClick={add_to_cart}>
                                  Add to Cart
                        </button>
                      </div>
                  </div>
            );
          })}

          
        </div>
      </section>
    </>
  );
}