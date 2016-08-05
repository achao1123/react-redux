import React, { PropTypes } from 'react';
import Product from './Product'
import _ from 'lodash';

export default class ProductList extends React.Component {

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
  }

  handleChange(e) {
  }

  render() {
    const { $$appStore, actions } = this.props;
    const $$products = $$appStore.get("$$products");
    const $$cart = $$appStore.get("cart");
    const productNodes = $$products.map($$product =>
      <Product 
        key={$$product.get('id')}
        title={$$product.get('title')}
        id={$$product.get('id')}
        price={$$product.get('price')}
        image={$$product.get('image')}
        actions={actions}
        inCart={$$product.get('in_cart')}
      />
    );
    return (
      <div>
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th colSpan="3"></th>
            </tr>
          </thead>

          <tbody>
            {productNodes}
          </tbody>
        </table>
      </div>
    );
  }
}
