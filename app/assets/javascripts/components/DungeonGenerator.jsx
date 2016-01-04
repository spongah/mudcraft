var roomNameArray = [ ['Dark', 'Scary', 'Bright', 'Windy'], 
                      ['Corridor', 'Forest', 'Beach', 'Desert']];
var roomDescriptionArray =  [ ['This is a very ', 'You are in a '], 
                              [' There is a wierd smell, and you feel a strange presence.',
                               'The air is fresh, but there is still kind of a wierd vibe in here.']
                            ];
var roomid = 0;

function updateRoom(id, room) {
	var formData = { room }
	var room_path = "/rooms/" + id + ".json"
  $.ajax({
    data: formData,
    url: room_path,
    type: "PATCH",
    dataType: "json"
  });
};

function postNewRoom(room) {
	var formData = { room }
  $.ajax({
    data: formData,
    url: "/rooms.json",
    type: "POST",
    dataType: "json"
  });
};

function updateLastRoom(room_origin) {
  $.get("/lastroom.json", function(result) {
    updateRoom(room_origin, { d: result.id });
  }.bind(this)); 
};


function generateNewRoom(options) {
	var direction = options["direction"];
	var room_origin = options["room"];
  var new_name_array = [roomNameArray[0][Math.floor(Math.random()*roomNameArray.length)], roomNameArray[1][Math.floor(Math.random()*roomNameArray.length)]];
  var new_name_string = new_name_array.join(" ");
	var new_description = roomDescriptionArray[0][Math.floor(Math.random()*roomDescriptionArray.length)] + new_name_array[1] + '. ' +
                        roomDescriptionArray[1][Math.floor(Math.random()*roomDescriptionArray.length)];
  var post_data = { name: new_name_string, description: new_description, u: room_origin }
	if (direction == "down") {
    postNewRoom(post_data);
    updateLastRoom(room_origin);
	}
};
