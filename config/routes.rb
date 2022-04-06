Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"

  root 'contacts#index' # To specify the homepage
  
  get 'contacts/index', as: 'contacts' # to redirect contacts controller at index method
  get 'contacts/new', as: 'new_contact' # to redirect to new contacts page
  post 'contacts/create', to: 'contacts#create', as: 'create_contact'
  get 'contacts/:id/edit', to: 'contacts#edit', as: 'edit_contact'
  patch 'contacts/:id/update', to: 'contacts#update', as: 'update_contact'
end
