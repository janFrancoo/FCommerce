import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CardColumns, Card, CardHeader, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import * as productActions from "../redux/actions/productActions";

class ProductList extends Component {
  shortenDesc(desc) {
    if (desc.length < 50)
      return desc;
    
    return desc.substring(0, 50) + "...";
  }

  render() {
    return (
      <CardColumns>
        {this.props.products.map((product) => (
          <Card key={product._id} className="bg-light">
            <CardHeader><Link to={"/product/" + product._id}>
                  {product.productName}
                </Link></CardHeader>
            <CardImg
              top
              height="200px"
              src={"http://localhost:5000/" + product.images[0]}
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle className="mb-1">Stock: {product.inStock} - Price: {product.price}</CardSubtitle>
              <CardText>{this.shortenDesc(product.description)}</CardText>
              <Button
                color="primary"
                onClick={() => this.props.actions.addProductToCart(product._id)}
              >
                Add to Cart
              </Button>
            </CardBody>
          </Card>
        ))}
      </ CardColumns>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addProductToCart: bindActionCreators(
        productActions.addProductToCart,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
