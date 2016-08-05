import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import BaseComponent from 'lib/components/BaseComponent';

import './Layout.scss';

export default class Layout extends BaseComponent {

  render() {
    return (
      <section>
        <header>
          <ul>
            <li>
              <IndexLink to="/products" activeClassName="active">
                Products
              </IndexLink>
            </li>
            <li>
              <Link to="/cart" activeClassName="active">
                Cart ({this.props.cartBadge})
              </Link>
            </li>
          </ul>
        </header>
        {this.props.children}
      </section>
    );
  }
}
