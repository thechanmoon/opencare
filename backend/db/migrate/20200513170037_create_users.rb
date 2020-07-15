class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :img_url
      t.string :password_digest
      t.string :zip_code
      t.float :latitude
      t.float :longitude
      t.boolean :is_business

      t.timestamps
    end
  end
end
