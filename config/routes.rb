Rails.application.routes.draw do
  resources :carts
  resources :products
  root "products#index"
  get '/cart', to: 'products#cart'
  post 'add_to_cart', to: 'products#add_to_cart'
  delete 'remove_from_cart', to: 'products#remove_from_cart'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
