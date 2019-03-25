import React, { Component } from "react";
import * as actionCreators from "../../store/actions/coffeeActions.js";
import { connect } from "react-redux";
// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.cart.items
  };
};
export default connect(mapStateToProps)(CoffeeCart);
