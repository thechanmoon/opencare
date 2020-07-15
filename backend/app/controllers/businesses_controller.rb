class BusinessesController < ApplicationController

    def index
        businesses = Business.all
        render json: businesses
    end

    def reviews
        reviews = Review.where(id: params["id"])
        render json: reviews
        
    end


    def create_review
        review = Review.new(user_id: params["currentUser"], business_id: params["currentBusiness"], message: params["formValue"], rating: params["ratingValue"])
        review.save
        business = Business.find(params["currentBusiness"])
        business.update(avg_review: business.averageReview)
        
        render json: business
    end

    def create
        business = Business.new(name: params["name"], bio: params['bio'], img_url: params["img_url"], email: params["email"], website: params["website"], address: params["address"], city: params["city"], state: params["state"], zip_code: params["zip"] )
        if business.valid?
        business.save
        allBiz = Business.all
        render json: allBiz 
        else
            render json: { error: "Invalid" }, status: :unauthorized
        end
    end

    def claim_business 
        business = Business.find_by(id: params['id'])
        business.update(user_id: params["userId"])
        if business.save?
        allBiz = Business.all
        render json: allBiz 
        end
    end

    def show
      
        business = Business.find_by(id: params['id'])
        render json: business 
    end

    # def updatebiz
    #     business = Business.find_by(id: params['id'])
    #     business = Business.update(name: params["name"], bio: params['bio'], img_url: params["img_url"], email: params["email"], website: params["website"], address: params["address"], city: params["city"], state: params["state"], zip_code: params["zip"] )

    #     if business.valid?
    #     business.save
    #     allBiz = Business.all
    #     render json: allBiz 
    #     else
    #         render json: { error: "Invalid" }, status: :unauthorized
    #     end
    # end
    
end
