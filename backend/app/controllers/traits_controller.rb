class TraitsController < ApplicationController
  def index
    traits = Trait.all
    render json: traits
  end
end
