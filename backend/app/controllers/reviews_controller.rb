class ReviewsController < ApplicationController

    def create_review
        review = Review.new(user_id: params["currentUser"], business_id: params["currentBusiness"], message: params["formValue"], rating: params["ratingValue"])
        review.save
        business = Business.find(params["currentBusiness"])
        render json: review
    end
end
