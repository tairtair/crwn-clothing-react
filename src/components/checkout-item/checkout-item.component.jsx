import { Fragment } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import './checkout-item.styles.scss';
const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, substractItemFromCart, removeItemFromCart } =
    useContext(CartContext);
  const increaseNumberOfProducts = () => addItemToCart(item);
  const decreaseNumberOfProducts = () => substractItemFromCart(item);
  const removeProductfromCart = () => removeItemFromCart(item);
  return (
    <Fragment>
      <img
        className="checkout-item checkout-item-image"
        src={imageUrl}
        alt={name}
      />
      <span className="checkout-item checkout-item-description">{name}</span>
      <div className="checkout-item checkout-item-quantity">
        <button onClick={decreaseNumberOfProducts} className="btn-decrease">
          &lsaquo;
        </button>
        <span>{quantity}</span>
        <button onClick={increaseNumberOfProducts} className="btn-increase">
          &rsaquo;
        </button>
      </div>
      <span className="checkout-item checkout-item-price">{price}</span>
      <button
        onClick={removeProductfromCart}
        className="checkout-item checkout-item-delete"
      >
        &#10005;
      </button>
      <div className="line"></div>
    </Fragment>
  );
};
export default CheckoutItem;
