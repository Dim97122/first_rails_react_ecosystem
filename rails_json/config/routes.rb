Rails.application.routes.draw do
  devise_for :users,
    defaults: {
      format: :json
    },
    controllers: {
      sessions: 'users/sessions'
    }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#home'

  resources :users, only: [:show, :update, :destroy]

end
