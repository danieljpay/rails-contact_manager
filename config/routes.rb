Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"

  root 'contacts#index' # To specify the homepage

  get 'contacts/index', as: 'contacts' # to redirect contacts controller at index method
end
