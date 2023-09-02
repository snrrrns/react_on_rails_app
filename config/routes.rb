Rails.application.routes.draw do
  root to: redirect('/events')

  get 'events', to: 'home#index'
  get 'events/new', to: 'home#index'
  get 'events/:id', to: 'home#index'
  get 'events/:id/edit', to: 'home#index'

  namespace :api do
    resources :events, only: %i[index show create update destroy]
  end
end
