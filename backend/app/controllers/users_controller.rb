class UsersController < ApplicationController


  def login
    user = User.find_by(email: params["email"])
    if user && user.authenticate(params["password"])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def resetpassword
    user = User.find_by(email: params["email"])
    if user && user.authenticate(params["currentpassword"])
      session[:user_id] = user.id
      user.password = (params["newpassword"])
      user.save
      render json: user
    else
      render json: { error: "Invalid" }, status: :unauthorized
    end
  end


  def create_account
    user = User.find_by(email: params["email"])
    if (user != nil)
      render json: { error: "A user already has an account with this email" }, status: :unauthorized
    else
      user = User.new(email: params["email"], password: params["password"])
      user.save
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :bad_request
      end
  
    end
  end

  def edit_profile
    user = User.find_by(id: params["id"])

    user.update()
  end


  def follow 
    doesfollow = Follow.find_by(user_id: params["userId"], business_id: params["id"]) 
    if (doesfollow === nil)
      follow = Follow.new(user_id: params["userId"], business_id: params["id"] )
    follow.save
    user = User.find_by(id: params["userId"])
    render json: user
    else 
    doesfollow.destroy
    doesfollow.save
    user = User.find_by(id: params["userId"])
    render json: user
    end
  end

  def logout 
    reset_session
    render json: { message: "Logged out" }
  end

end
