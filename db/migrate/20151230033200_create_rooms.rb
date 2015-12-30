class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :name, :null => false, :default => ""
      t.text :description, :null => false, :default => ""
      t.integer :n, :null => false, :default => 0
      t.integer :ne, :null => false, :default => 0
      t.integer :e, :null => false, :default => 0
      t.integer :se, :null => false, :default => 0
      t.integer :s, :null => false, :default => 0
      t.integer :sw, :null => false, :default => 0
      t.integer :w, :null => false, :default => 0
      t.integer :nw, :null => false, :default => 0
      t.integer :u, :null => false, :default => 0
      t.integer :d, :null => false, :default => 0

      t.timestamps null: false
    end
  end
end
