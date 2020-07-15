class CreateFollows < ActiveRecord::Migration[6.0]
  def change
    create_table :follows do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
