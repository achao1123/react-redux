import request from 'axios';
import metaTagsManager from './metaTagsManager';

export default {

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  submitEntity(entity) {
    return request({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: entity,
    });
  },

  removeFromCart(productId) {
    return request({
      method: "DELETE",
      url: 'remove_from_cart.json',
      responseType: "json",
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: productId
    })
  },

  addToCart(product) {
    return request({
      method: "POST",
      url: 'add_to_cart.json',
      responseType: "json",
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: product
    });
  }

};
