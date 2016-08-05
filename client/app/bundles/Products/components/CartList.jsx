import React, { PropTypes } from 'react';
import CartItem from './CartItem'
import _ from 'lodash';

export default class ProductList extends React.Component {

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
  }

  render() {
    const { $$appStore, actions } = this.props;
    const $$products = $$appStore.get("cart");
    const $$cart = $$appStore.get("cart");
    var subTotal = 0;
    $$products.forEach(product => {
      subTotal += product.get("price");
    })

    const cartNodes = $$products.map($$product =>
      <CartItem
        key={$$product.get('id')}
        title={$$product.get('title')}
        id={$$product.get('id')}
        price={$$product.get('price')}
        image={$$product.get('image')}
        actions={actions}
      />
    );
    return (
      <div>
        <h1>Cart</h1>
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
            {cartNodes}
            <tr>
              <td>Subtotal</td>
              <td></td>
              <td>{Number((subTotal * 1.0865).toFixed(2))}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function subTotal(products) {
  var total = 0; 
  products.forEach(product => {
    total += product.get("price");
  })
  return total
}
