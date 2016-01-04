class RoomController < ApplicationController
	before_action :set_room, only: [:show]

	def show
	end

	def create
    @room = Room.new(room_params)
    respond_to do |format|
      if @room.save
        format.html { redirect_to room_path(@room), notice: 'Task was successfully created.' }
        format.json { render :show, status: :created, location: @room }
      else
        format.html { render :new }
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end


	private

		def set_room
			@room = Room.find(params[:id])
		end

		def room_params
			params.require(:room).permit(:name, :description, :n, :ne, :e, :se, :s, :sw, :w, :nw, :u, :d)
		end

end
