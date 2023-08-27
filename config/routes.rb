Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :events, only: %i[index show create update destroy]
  end
end
