class Blueprint < ActiveRecord::Base
	def self.nameZone(options = {})
		namesArray = []
		positionsArray = (self.where(map_zone: options[:zone], data_type: options[:type]).map { |x| x.data_position }).uniq
		positionsArray.each do |x|
			namesArray.push(self.where(map_zone: options[:zone], data_type: options[:type], data_position: x).map { |y| y.data_value })
		end
		finalNameArray = namesArray.map { |x| x.sample }
		(options[:position] == 0) ? finalNameArray.join(" ") : finalNameArray[options[:position]-1]
	end

	def self.nameCoordinate(options = {})
		x = options[:x].to_i
		y = options[:y].to_i
		z = options[:z].to_i
		zone = 1

		if z=0 && (-50..50).include?(x || y) then zone = 2 end
		if z=0 && x <= 10 && y <= 10 then zone = 1 end


		self.nameZone({ zone: zone, position: options[:position], type: options[:type] })
	end
end



