json.array!(@blueprints) do |blueprint|
  json.extract! blueprint, :id, :map_zone, :data_type, :data_position, :data_value
  json.url blueprint_url(blueprint, format: :json)
end
