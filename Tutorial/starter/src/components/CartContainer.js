import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      </div>

      <footer>
        <hr />
        <div className='cart-total'>
          <h2>
            Total <span>$</span>
          </h2>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
