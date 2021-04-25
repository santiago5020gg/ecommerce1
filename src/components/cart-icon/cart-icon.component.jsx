import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartActionTypes } from "../../redux/cart/cart.types";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden(CartActionTypes.TOGGLE_CART_HIDDEN))
})

export default connect(null, mapDispatchToProps)(CartIcon);
