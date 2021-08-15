Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :beers, only: [:index, :show, :create, :edit, :destroy]
    end
  end
  root 'beers#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
