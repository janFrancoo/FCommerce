import React, { Component } from 'react'
import { Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3" >
                        <CategoryList />
                    </Col>
                    <Col xs="9">
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
