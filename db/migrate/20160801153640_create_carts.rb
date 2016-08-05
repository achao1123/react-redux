class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.timestamps
    end
    create_table :carts_products do |t|
      t.belongs_to :product, index: true
      t.belongs_to :cart, index: true
    end
  end
end
