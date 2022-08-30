import './cart-item.styles.scss';
const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} className="item-image" />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
