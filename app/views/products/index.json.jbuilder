json.products @products, partial: 'products/product', as: :product
json.cart @cart.products, partial: 'products/product', as: :product
