import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../redux/actions/productActions";
import {
  Row,
  Col,
  Badge,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardText,
  CardTitle
} from "reactstrap";

class ProductDetail extends Component {
  state = {
    quantity: 0,
    totalPrice: 0,
    imageIdx: 0,
  };

  updateQuantity(amount) {
    if (!(this.state.quantity === 0 && amount === -1))
      this.setState({
        quantity: this.state.quantity + amount,
        totalPrice: (this.state.quantity + amount) * this.props.product.price,
      });
  }

  componentDidMount() {
    this.props.actions.getProduct(this.props.productId);
    this.props.actions.getComments(this.props.productId);
  }

  formatDate(date) {
    const toBeFormatted = new Date(date);
    const format = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }) 
    const [{ value: month },,{ value: day },,{ value: year },,{ value: hour },,{ value: minute} ] = format.formatToParts(toBeFormatted) 

    return (`${day}-${month}-${year} ${hour}-${minute}`)
  }

  handleSubmit(event) {
    event.preventDefault();

    const comment = event.target.comment.value;
    event.target.comment.value = "";

    this.props.actions.addComment(this.props.productId, comment);
  }

  render() {
    return (
      <div className="mt-5">
        {Object.keys(this.props.product).length !== 0 && (
          <div>
            <Row>
              <Col xs="6">
                {this.props.product.images && (
                  <div>
                    <img
                      src={
                        "http://localhost:5000/" +
                        this.props.product.images[this.state.imageIdx]
                      }
                      alt=""
                      height="500"
                      width="500"
                    />
                    <hr />
                    {this.props.product.images.map((imgUrl, idx) => (
                      <img
                        key={imgUrl}
                        src={"http://localhost:5000/" + imgUrl}
                        width="50"
                        height="50"
                        alt=""
                        className="mr-2 onclick_badge"
                        onClick={() => this.setState({ imageIdx: idx })}
                      />
                    ))}
                  </div>
                )}
              </Col>
              <Col xs="5">
                <h3>{this.props.product.productName}</h3>
                <p>{this.props.product.description}</p>
                <p>In stock: {this.props.product.inStock}</p>
                <p>Price: {this.props.product.price} TL</p>
                <h4>
                  <Badge
                    color="primary"
                    className="mr-2 onclick_badge"
                    onClick={() => this.updateQuantity(-1)}
                  >
                    -
                  </Badge>
                  {this.state.quantity}
                  <Badge
                    color="primary"
                    className="ml-2 mr-2 onclick_badge"
                    onClick={() => this.updateQuantity(1)}
                  >
                    +
                  </Badge>
                  {this.state.totalPrice} TL
                </h4>
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.actions.addProductToCart(
                      this.props.productId,
                      this.state.quantity
                    )
                  }
                >
                  Add to Cart
                </Button>
              </Col>
            </Row>
            <Row className="mt-4 mb-5">
              <Col>
                <h4 className="text-primary">Comments</h4>
                <hr />
                {this.props.comments.map((comment) => (
                  <Card key={comment._id} className="mt-2">
                    <CardBody>
                      <CardTitle>{comment.user.username}</CardTitle>
                      <CardText>
                        {comment.message}
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                          {this.formatDate(comment.date)}
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                ))}
                <hr />
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                  <FormGroup>
                    <Label for="comment">Your comment:</Label>
                    <Input type="textarea" name="comment" id="comment" placeholder="Enter your comment for this product" />
                  </FormGroup>
                  <Button color="primary">Add Comment</Button>
                </Form>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.id;

  return {
    productId,
    product: state.productReducer,
    comments: state.commentReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(productActions.getProduct, dispatch),
      addProductToCart: bindActionCreators(
        productActions.addProductToCart,
        dispatch
      ),
      getComments: bindActionCreators(productActions.getComments, dispatch),
      addComment: bindActionCreators(productActions.addComment, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
