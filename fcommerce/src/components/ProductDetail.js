import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../redux/actions/productActions";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

class ProductDetail extends Component {
  componentWillMount() {
    if (Object.keys(this.props.product).length === 0) {
        this.props.actions.getProduct(this.props.productId);
        console.log(this.props.product);
    }
  }

  render() {
    return (
      <div>
        <Card>
          {/*<CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />*/}
          <CardBody>
            <CardTitle>{this.props.product.productName}</CardTitle>
            <CardText>
              {this.props.product.description}
            </CardText>
            <Button color="primary">Add to Cart</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function getProductById(products, productId) {
  const product = products.products.find(
    (product) => product._id === productId
  );
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.id;

  return {
    productId,
    product: state.productListReducer.success ? getProductById(state.productListReducer, productId) : state.productReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(productActions.getProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
