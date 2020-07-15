class User < ApplicationRecord

    has_secure_password

    has_many :businesses

    has_many :follows
    has_many :businesses, through: :follows
    
    has_many :reviews 
    has_many :businesses, through: :reviews

    validates :email, presence: true, uniqueness: true

geocoded_by :zip_code
  after_validation :geocode, :if => :zip_code_changed?
end
