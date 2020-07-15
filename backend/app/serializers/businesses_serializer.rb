class BusinessesSerializer < ActiveModel::Serializer
  attributes :id, :reviews



  def reviews 
      array = []
    reviews = Review.where(business_id: Self.id)
    reviews.each do |review|
      obj = {
        review: review,
        user: User.find_by(id: review.user_id)
    }
    array.push(obj)
   
    end
     return array
  end



end
