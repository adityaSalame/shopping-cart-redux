// CheckoutSidebar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../store/action';

const CheckoutSidebar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Reset the cart and display a success message
    dispatch(resetCart());
    alert('Items have been checked out successfully.');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CheckoutSidebar;
