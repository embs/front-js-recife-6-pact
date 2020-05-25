class UsersController < ApplicationController
  def show
    render json: { name: 'Mary' }
  end
end
