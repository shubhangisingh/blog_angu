class Api::BlogsController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => [:create, :update]
	respond_to :json
	def index
		if params[:tag]
			@blogs = Blog.tagged_with(params[:tag])
		else
			@blogs= Blog.where(active: true)
		end
		
		respond_with @blogs
	end
	def show
		@blog= Blog.find(params[:id])
		respond_with @blog
	end
	def create
		@blog= Blog.new(blog_permit)
		@blog.save!
		respond_with @blog
	end

	

	private
	def blog_permit
		params.require(:blog).permit!
		
	end
end
