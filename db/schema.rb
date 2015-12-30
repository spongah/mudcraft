# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151230033200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "rooms", force: :cascade do |t|
    t.string   "name",        default: "", null: false
    t.text     "description", default: "", null: false
    t.integer  "n",           default: 0,  null: false
    t.integer  "ne",          default: 0,  null: false
    t.integer  "e",           default: 0,  null: false
    t.integer  "se",          default: 0,  null: false
    t.integer  "s",           default: 0,  null: false
    t.integer  "sw",          default: 0,  null: false
    t.integer  "w",           default: 0,  null: false
    t.integer  "nw",          default: 0,  null: false
    t.integer  "u",           default: 0,  null: false
    t.integer  "d",           default: 0,  null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

end
