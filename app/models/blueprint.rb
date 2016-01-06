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


end



