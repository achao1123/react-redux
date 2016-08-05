json.extract! product, :id, :title, :price, :image, :created_at, :updated_at
json.url product_url(product, format: :json)
json.in_cart @cart.products.include?(product)
