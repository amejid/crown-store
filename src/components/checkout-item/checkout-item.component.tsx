import { useDispatch, useSelector } from 'react-redux';
import {
  CheckoutItemContainer, ImageContainer, Arrow, Quantity, Value, RemoveButton, NamePrice,
} from './checkout-item.styles';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {CartItem} from "../../store/cart/cart.types";
import {FC} from "react";

type CheckoutItemProps = {
  cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const {
    name, imageUrl, price, quantity,
  } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePrice>{name}</NamePrice>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <NamePrice>{price}</NamePrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
