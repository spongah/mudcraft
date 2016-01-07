class Blueprint < ActiveRecord::Base
	
	@directionArray = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']

	def self.nameZone(options = {})
		namesArray = []
		positionsArray = (self.where(map_zone: options[:zone], data_type: options[:type]).map { |x| x.data_position }).uniq
		positionsArray.each do |x|
			namesArray.push(self.where(map_zone: options[:zone], data_type: options[:type], data_position: x).map { |y| y.data_value })
		end
		finalNameArray = namesArray.map { |x| x.sample }
		(options[:position] == 0) ? finalNameArray.join(" ") : finalNameArray[options[:position]-1]
	end

	def self.generateRooms(options = {})

		number_already_exist = 0
		number_new = 0
		number_created = 0
		number_of_rooms = options[:number_of_rooms]
		starting_room = options[:starting_room]

		until number_created == number_of_rooms do
			source_room = Room.find(starting_room)
			source_room_id = source_room.id
			source_coordinates = { x: source_room.x, y: source_room.y, z: source_room.z }
			target_room = 0
			target_coordinates = { x: source_room.x, y: source_room.y, z: source_room.z }
			chosen_direction = @directionArray.sample

			post_data = {}

			if chosen_direction == "north" then 
				target_coordinates[:y] += 1
				post_data[:s] = source_room.id
			end
			if chosen_direction == "northeast" then 
				target_coordinates[:x] += 1 
				target_coordinates[:y] += 1 
				post_data[:sw] = source_room.id
			end
			if chosen_direction == "east" then 
				target_coordinates[:x] += 1
				post_data[:w] = source_room.id
		 	end
			if chosen_direction == "southeast" then 
				target_coordinates[:x] += 1
				target_coordinates[:y] -= 1
				post_data[:nw] = source_room.id
			end
			if chosen_direction == "south" then 
				target_coordinates[:y] -= 1 
				post_data[:n] = source_room.id
			end
			if chosen_direction == "southwest" then 
				target_coordinates[:x] -= 1
				target_coordinates[:y] -= 1
				post_data[:ne] = source_room.id
			end
			if chosen_direction == "west" then 
				target_coordinates[:x] -= 1 
				post_data[:e] = source_room.id
			end
			if chosen_direction == "northwest" then 
				target_coordinates[:x] -= 1
				target_coordinates[:y] += 1
				post_data[:se] = source_room.id
			end
			if chosen_direction == "up" then 
				target_coordinates[:z] += 1 
				post_data[:d] = source_room.id
			end
			if chosen_direction == "down" then 
				target_coordinates[:z] -= 1 
				post_data[:u] = source_room.id
			end

			name_post = {}
			description_post = {}
			name_post[:x] = target_coordinates[:x]
			name_post[:y] = target_coordinates[:y]
			name_post[:z] = target_coordinates[:z]
			name_post[:position] = 0
			name_post[:type] = "name"
			description_post[:x] = target_coordinates[:x]
			description_post[:y] = target_coordinates[:y]
			description_post[:z] = target_coordinates[:z]
			description_post[:position] = 0
			description_post[:type] = "description"

			post_data[:x] = target_coordinates[:x]
			post_data[:y] = target_coordinates[:y]
			post_data[:z] = target_coordinates[:z]
			post_data[:name] = Blueprint.nameCoordinate(name_post)
			post_data[:description] = Blueprint.nameCoordinate(description_post)

			if Room.where(x: target_coordinates[:x]).where(y: target_coordinates[:y]).where(z: target_coordinates[:z]) == [] then
				#create room
				puts "ROOM DOES NOT EXIST - " + chosen_direction
				number_new += 1
				puts post_data
				Room.create(post_data)
				new_room_id = Room.where(x: target_coordinates[:x]).where(y: target_coordinates[:y]).where(z: target_coordinates[:z]).first.id
				old_room = Room.find(source_room_id)

				if chosen_direction == "north" then old_room.n = new_room_id end
				if chosen_direction == "northeast" then old_room.ne = new_room_id end
				if chosen_direction == "east" then old_room.e = new_room_id end
				if chosen_direction == "southeast" then old_room.se = new_room_id end
				if chosen_direction == "south" then old_room.s = new_room_id end
				if chosen_direction == "southwest" then old_room.sw = new_room_id end
				if chosen_direction == "west" then old_room.w = new_room_id end
				if chosen_direction == "northwest" then old_room.nw = new_room_id end
				if chosen_direction == "up" then old_room.u = new_room_id end
				if chosen_direction == "down" then old_room.d = new_room_id end

				old_room.save
				starting_room = new_room_id
				number_created += 1
			elsif ([1,2,3,4,5,6,7,8,9,0].sample >= 8)
				#update rooms
				puts "ROOM DOES EXIST - " + chosen_direction
				number_already_exist += 1
				new_room = Room.where(x: target_coordinates[:x]).where(y: target_coordinates[:y]).where(z: target_coordinates[:z]).first
				new_room_id = new_room.id
				#set source room exit to new room id
				if chosen_direction == "north" then source_room.n = new_room_id end
				if chosen_direction == "northeast" then source_room.ne = new_room_id end
				if chosen_direction == "east" then source_room.e = new_room_id end
				if chosen_direction == "southeast" then source_room.se = new_room_id end
				if chosen_direction == "south" then source_room.s = new_room_id end
				if chosen_direction == "southwest" then source_room.sw = new_room_id end
				if chosen_direction == "west" then source_room.w = new_room_id end
				if chosen_direction == "northwest" then source_room.nw = new_room_id end
				if chosen_direction == "up" then source_room.u = new_room_id end
				if chosen_direction == "down" then source_room.d = new_room_id end
				source_room.save

				if chosen_direction == "south" then new_room.n = source_room_id end
				if chosen_direction == "southwest" then new_room.ne = source_room_id end
				if chosen_direction == "west" then new_room.e = source_room_id end
				if chosen_direction == "northwest" then new_room.se = source_room_id end
				if chosen_direction == "north" then new_room.s = source_room_id end
				if chosen_direction == "northeast" then new_room.sw = source_room_id end
				if chosen_direction == "east" then new_room.w = source_room_id end
				if chosen_direction == "southeast" then new_room.nw = source_room_id end
				if chosen_direction == "down" then new_room.u = source_room_id end
				if chosen_direction == "up" then new_room.d = source_room_id end
				new_room.save
				starting_room = new_room_id
				number_created += 1
			end
		end
		puts "New rooms created: " + number_new.to_s
		puts "Existing rooms snaked through: " + number_already_exist.to_s
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



