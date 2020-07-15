class CreateHours < ActiveRecord::Migration[6.0]
  def change
    create_table :hours do |t|
      t.belongs_to :business, null: false, foreign_key: true
      t.string :day
      t.string :open_time
      t.string :close_time

      t.timestamps
    end
  end
end
