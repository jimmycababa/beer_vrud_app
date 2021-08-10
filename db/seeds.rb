Beer.delete_all
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Beer.create(brand: 'Eagle Park', style: 'IPA', country: 'USA', quantity: 20)
Beer.create(brand: 'Delerium', style: 'Belgium Pale Ale', country: 'Belgium', quantity: 25)
Beer.create(brand: 'San Miguel', style: 'Lager', country: 'Philippines', quantity: 100)