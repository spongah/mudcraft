class RoomController < ApplicationController
	before_action :set_room, only: [:show, :update, :destroy]

	def index
		@room = Room.last
	end

	def show
	end

	def create
    @room = Room.new(room_params)
	    respond_to do |format|
	      if @room.save
	        format.json { redirect_to @room }
	      else
	        format.json { render json: @room.errors, status: :unprocessable_entity }
	      end
	    end
  end

  def update
    respond_to do |format|
      if @room.update(room_params)
        format.json { render :show, status: :ok, location: @room }
      else
        format.json { render json: @room.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @room.destroy
    respond_to do |format|
      format.json { head :no_content }
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
