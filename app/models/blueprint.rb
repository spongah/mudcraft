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
		zone = 2

		if z==0 then
			#desert
			if (x <= 5) && (y <= 5) then zone = 4 end
			if (x >= 5) && (y <= 5) && (y <= (5 - (0.5 * x))) then zone = 4 end

			#northwest forest
			if (x <= -5) && (y >= 5) then zone = 2 end
			if (x <= -5) && (y <= (x * -1)) && (y >= 5) then zone = 2 end

			#jungle
			if (x <= -5) && (y > (x * -1)) then zone = 3 end
			if (x >= -5) && (y >= -5) then zone = 3 end
			if (x >= 5) && (y >= (-5 - (0.5 * x))) then zone = 3 end

			#northeast forest
			if (x >= 50) && (y >= 30) then zone = 2 end
			if (x >= 30) && (y >= (30 - (0.5 * x))) then zone = 2 end

			#urban area
			#if (-5..5).include?(x && y) then zone = 1 end
			if ((x <= 5) && (x >= -5)) && ((y <= 5) && (y >= -5)) then zone = 1 end

			#northwest lake
			if (-82..-76).include?(x) && (51..57).include?(y) then zone = 7 end

			#old temple area
			if (98..114).include?(x) && (102..120).include?(y) then zone = 8 end

			#old temple courtyard
			if (100..110).include?(x) && (95..101).include?(y) then zone = 9 end

			#ancient pathway
			if (x > 5 && x < 50) && (y == 0 || y == 1) then zone = 10 end
			if (x >= 50) && y == ((x - 50) || y == (x - 50)) then zone = 10 end
			if (x == 100 || x == 101) && (y >= 50 && y <= 94) then zone = 10 end 

			#river

			#UFO crash landing

			#desert oasis

			#buried treasure

			#desert entrance
			if (x == -2) && (y == -3) then zone = 4 end
			if (x == -3) && (y == -4) then zone = 4 end
			if (x == -4) && (y == -5) then zone = 4 end
			

		end

		if z < 0 then zone = 5 end 	#below ground
		if z > 0 then zone = 6 end	#above ground



		self.nameZone({ zone: zone, position: options[:position], type: options[:type] })
	end
end



