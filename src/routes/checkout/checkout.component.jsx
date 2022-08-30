import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const Checkout = () => {
  const { cartItems, checkoutTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">Product</div>
      <div className="checkout-header">Description</div>
      <div className="checkout-header">Quantity</div>
      <div className="checkout-header">Price</div>
      <div className="checkout-header">Remove</div>
      <div className="line"></div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="checkout-total">
        <span>total : {checkoutTotal}</span>
      </div>
    </div>
  );
};
export default Checkout;
