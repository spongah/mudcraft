class CreateBlueprints < ActiveRecord::Migration
  def change
    create_table :blueprints do |t|
      t.integer :map_zone
      t.string :data_type
      t.integer :data_position
      t.string :data_value

      t.timestamps null: false
    end
  end
end
