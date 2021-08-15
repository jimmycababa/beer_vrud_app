class AddSizeToBeers < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :size, :string
  end
end
