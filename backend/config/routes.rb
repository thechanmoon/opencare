Rails.application.routes.draw do
  get 'traits/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/businesses', to: 'businesses#index'

  get '/business/:id', to: 'businesses#show'

  post '/createbusiness', to: 'businesses#create'


  post '/followbusiness', to: 'users#follow'

  patch '/editbusiness', to: 'businesses#edit'
  patch '/claimBusiness', to: 'businesses#claim_business'

  get '/reviews/:id', to: 'businesses#reviews'
  

  get "/traits", to: "traits#index"
  post '/login', to: 'users#login'

  post '/logout', to: 'users#logout'

  post '/followBusiness', to: 'users#follow'

  patch '/resetpassword', to: 'users#resetpassword'
  patch '/editProfile', to: 'users#edit_profile'


  post '/createAccount', to: 'users#create_account'
  post "/review/new" , to: 'businesses#create_review'

  
end
