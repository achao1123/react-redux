import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import _ from 'lodash';

import BaseComponent from 'lib/components/BaseComponent';

export default class Product extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, [
      '_removeFromCart'
    ]);
  }

  _removeFromCart(e) {
    const { id } = this.props;
    this.props.actions.removeFromCart(id);
  }

  render() {
    const { id, title, price, image } = this.props;
    return (
      <tr>
        <td><img src={image} alt="image" /></td>
        <td>{title}</td>
        <td>{price}</td>
        <td><button onClick={this._removeFromCart}>Remove From Cart</button></td>
      </tr>
    )
  }

}
