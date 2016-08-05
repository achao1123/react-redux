import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import _ from 'lodash';

import BaseComponent from 'lib/components/BaseComponent';

export default class Product extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, [
      '_addToCart'
    ]);
  }

  _addToCart(e) {
    const { id, title, price, image, inCart } = this.props;
    if (inCart) { return; }
    const product = Immutable.fromJS({
      id: id,
      title: title,
      price: price,
      image: image
    });
    this.props.actions.addToCart(product);
  }

  render() {
    const { id, title, price, image, inCart } = this.props;
    let addToCartButton;
    if (!inCart) {
      addToCartButton = (
        <td><button onClick={this._addToCart}>Add to Cart</button></td>
      );
    }
    return (
      <tr>
        <td><img src={image} alt="image" /></td>
        <td>{title}</td>
        <td>{price}</td>
        {addToCartButton}
      </tr>
    )
  }

}
