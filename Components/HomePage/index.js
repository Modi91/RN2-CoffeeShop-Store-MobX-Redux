import React, { Component } from "react";
import { View } from "react-native";
import * as actionCreators from "../../store/actions/coffeeActions.js";
import { connect } from "react-redux";
// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";
import { getCofeeShops } from "../../store/actions/coffeeActions";
class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(getCofeeShops())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(HomePage);
