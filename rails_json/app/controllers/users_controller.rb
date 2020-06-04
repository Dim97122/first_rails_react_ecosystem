class UsersController < ApplicationController
before_action :load_user, only: [:show, :edit, :update, :destroy]

def show
end

def edit
end

def update
end

  def destroy
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username)
  end

  def load_user
    return @user = User.find(params[:id])
  end
end
