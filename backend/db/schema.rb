# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_18_204047) do

  create_table "business_traits", force: :cascade do |t|
    t.integer "trait_id"
    t.integer "business_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "businesses", force: :cascade do |t|
    t.integer "user_id"
    t.string "img_url"
    t.string "email"
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "website"
    t.string "kid_count"
    t.string "staff_count"
    t.string "zip_code"
    t.float "avg_review"
    t.boolean "is_approved"
    t.string "bio"
    t.integer "review_count", default: 0
    t.float "longitude"
    t.float "latitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_businesses_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_follows_on_business_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "hours", force: :cascade do |t|
    t.integer "business_id", null: false
    t.string "day"
    t.string "open_time"
    t.string "close_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_hours_on_business_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.string "message"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_reviews_on_business_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "traits", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "img_url"
    t.string "password_digest"
    t.string "zip_code"
    t.float "latitude"
    t.float "longitude"
    t.boolean "is_business"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "follows", "businesses"
  add_foreign_key "follows", "users"
  add_foreign_key "hours", "businesses"
  add_foreign_key "reviews", "businesses"
  add_foreign_key "reviews", "users"
end
