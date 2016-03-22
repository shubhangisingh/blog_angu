Rails.application.routes.draw do

  get 'static_pages/index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
    namespace :api, defaults: {format: :json} do
      get 'tag_autocomplete/:qyery', to: 'tags#autocomplete', as: "tag_autocomplete"
       resources :tags, only: [:index]
       post "blogs/create",  as: :blog_create_path
      resources :blogs, only: [:index, :show, :create] do
       resources :comments, only: [:index,:create,:update]
     end
    end

   root 'static_pages#index'
end
