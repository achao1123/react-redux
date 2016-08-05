class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :title
      t.float :price, default: 0.0
      t.string :image

      t.timestamps
    end
  end
end
