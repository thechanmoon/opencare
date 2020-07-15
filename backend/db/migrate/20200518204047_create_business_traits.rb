class CreateBusinessTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :business_traits do |t|
      t.integer :trait_id
      t.integer :business_id

      t.timestamps
    end
  end
end
