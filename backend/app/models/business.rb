class Business < ApplicationRecord
  belongs_to :user, optional: true

  has_many :business_traits
  has_many :traits, through: :business_traits

  has_many :hours

  has_many :follows
  has_many :users, through: :follows

  has_many :reviews 
  has_many :users, through: :reviews

  validates :name, presence: true

  geocoded_by :address
  after_validation :geocode, :if => :address_changed?



  def averageReview
 
  count = 0
  total = 0
  self.reviews.each do  |review|
    count = count + 1
    total = total + review.rating
  end

  average = total.to_f/count.to_f
  return average.round(1)

  end
end



