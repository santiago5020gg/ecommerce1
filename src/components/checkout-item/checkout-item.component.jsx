import React from "react";
import { connect } from "react-redux";

import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import { ArrowContainer, CheckoutItemContainer, ImageCheckout, Imagecontainer, NameContainer, PriceContainer, QuantityContainer, RemoveButtonContainer, ValueContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <Imagecontainer>
        <img src={imageUrl} alt="item" />
      </Imagecontainer>

      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)} >&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}  >&#10095;</ArrowContainer>
      </QuantityContainer>

      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const maptDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, maptDispatchToProps)(CheckoutItem);
