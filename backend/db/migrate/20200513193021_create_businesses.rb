class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.belongs_to :user
      t.string :img_url
      t.string :email
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :website
      t.string :kid_count
      t.string :staff_count
      t.string :zip_code
      t.float :avg_review, default: nil
      t.boolean :is_approved
      t.string :bio
      t.integer :review_count, default: 0
      t.float :longitude, default: nil
      t.float :latitude, default: nil

      t.timestamps
    end
  end
end
