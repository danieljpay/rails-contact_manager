Rails.application.routes.draw do
  get 'dashboard/index'
  get 'home/index'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"

  root 'home#index' # To specify the homepage

  devise_for :users, path: 'auth', controllers: {registrations: :custom_registrations }, path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' }
  # get 'contacts/index', as: 'contacts' # to redirect contacts controller at index method
  # get 'contacts/new', as: 'new_contact' # to redirect to new contacts page
  # post 'contacts/create', to: 'contacts#create', as: 'create_contact'
  # get 'contacts/:id/edit', to: 'contacts#edit', as: 'edit_contact'
  # patch 'contacts/:id/update', to: 'contacts#update', as: 'update_contact'
  # delete 'contacts/:id/destroy', to: 'contacts#destroy', as: 'destroy_contact'

  # resurces :entity create all the above routes for the entity setted
  resources :contacts, except: [:show] do # This except avoid to add the route for contact show
    get 'autocomplete', on: :collection
  end

  post '/groups', to: 'groups#create'

  get '/dashboard', to: 'dashboard#index'

end
