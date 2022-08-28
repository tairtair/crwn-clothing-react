import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
  // const { cartOpen } = useContext(CartContext);
  {
    /* <div className={`cart-dropdown-container  ${!cartOpen ? 'hidden' : null}`}> */
  }
  return (
    <div className={`cart-dropdown-container`}>
      <div className="cart-items"> </div>
      <Button>go to checkout</Button>
    </div>
  );
};
export default CartDropdown;
