class RoomController < ApplicationController
	before_action :set_room, only: [:show]

	def show
	end

	private

		def set_room
			@room = Room.find(params[:id])
			@room.exits = exit_string
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
	  	if @room.n > 0 then exit_array.push(view_context.link_to("north", room_path(@room.n))) end
	  	if @room.ne > 0 then exit_array.push(view_context.link_to("northeast", room_path(@room.ne))) end
	  	if @room.e > 0 then exit_array.push(view_context.link_to("east", room_path(@room.e))) end
	  	if @room.se > 0 then exit_array.push(view_context.link_to("southeast", room_path(@room.se))) end
	  	if @room.s > 0 then exit_array.push(view_context.link_to("south", room_path(@room.s))) end
	  	if @room.sw > 0 then exit_array.push(view_context.link_to("southwest", room_path(@room.sw))) end
	  	if @room.w > 0 then exit_array.push(view_context.link_to("west", room_path(@room.w))) end
	  	if @room.nw > 0 then exit_array.push(view_context.link_to("northwest", room_path(@room.nw))) end
	  	if @room.u > 0 then exit_array.push(view_context.link_to("up", room_path(@room.u))) end
	  	if @room.d > 0 then exit_array.push(view_context.link_to("down", room_path(@room.d))) end
	  	return exit_array 	
	  end

	  def exit_list_string
	  	return exit_list.join(', ')
	  end
end
