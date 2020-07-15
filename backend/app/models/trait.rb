class Trait < ApplicationRecord

    has_many :business_traits
  has_many :businesses, through: :business_traits
end
