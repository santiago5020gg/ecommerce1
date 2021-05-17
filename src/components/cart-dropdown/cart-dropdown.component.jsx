import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden())
      }}
    >
      {" "}
      GOT TO CHECKOUT{" "}
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
