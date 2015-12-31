class RoomController < ApplicationController
	before_action :set_room, only: [:show]

	def show
	end

	private

		def set_room
			@room = Room.find(params[:id])
			@room.exits = exit_list
		end

		def room_params
			params.require(:room).permit()
		end

		def exit_string
			result = ""

			if exit_count > 0
				if exit_count > 1
					result += "There are exits to the "
				else
					result += "There is an exit to the "
				end
			else
				 result = "There are no exits in this room"	
			end
			result += exit_list_string + "."
			return result
	  end

	  def exit_count
	  	exit_list.length
	  end

	  def exit_list
	  	exit_array = []
	  	if @room.n > 0 then exit_array.push( { name: "north", :path => room_path(@room.n, format: :json)} ) end
	  	if @room.ne > 0 then exit_array.push( { name: "northeast", :path => room_path(@room.ne, format: :json)} ) end
	  	if @room.e > 0 then exit_array.push( { name: "east", :path => room_path(@room.e, format: :json)} )  end
	  	if @room.se > 0 then exit_array.push( { name: "southeast", :path => room_path(@room.se, format: :json)} ) end
	  	if @room.s > 0 then exit_array.push( { name: "south", :path => room_path(@room.s, format: :json)} )  end
	  	if @room.sw > 0 then exit_array.push( { name: "southwest", :path => room_path(@room.sw, format: :json)} ) end
	  	if @room.w > 0 then exit_array.push( { name: "west", :path => room_path(@room.w, format: :json)} )  end
	  	if @room.nw > 0 then exit_array.push( { name: "northwest", :path => room_path(@room.nw, format: :json)} ) end
	  	if @room.u > 0 then exit_array.push( { name: "up", :path => room_path(@room.u, format: :json)} )  end
	  	if @room.d > 0 then exit_array.push( { name: "down", :path => room_path(@room.d, format: :json)} )  end
	  	return exit_array 	
	  end
end
