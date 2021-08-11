class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :brand
      t.string :style
      t.string :country
      t.integer :quantity

      t.timestamps
    end
  end
end

# create_table specifies how the beers table should be constructed. 
# t.timestamps method defines two additonal columns named created_at and updated_at