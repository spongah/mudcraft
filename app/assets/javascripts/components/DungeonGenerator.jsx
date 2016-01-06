
function addNewRoom(options) {
  var room_origin = options["room_origin"];
  var formData = { room: options["post_data"] }
  var room_path = "/rooms/" + room_origin + ".json"
  $.ajax({
    data: formData,
    url: "/rooms.json",
    type: "POST",
    dataType: "json",
    success: function() {
      $.get("/lastroom.json", function(result) {
        var newFormData;
        if (options["direction"] == "north") { newFormData = { room: { n: result.id } } }
        if (options["direction"] == "northeast") { newFormData = { room: { ne: result.id } } }
        if (options["direction"] == "east") { newFormData = { room: { e: result.id } } }
        if (options["direction"] == "southeast") { newFormData = { room: { se: result.id } } }
        if (options["direction"] == "south") { newFormData = { room: { s: result.id } } }
        if (options["direction"] == "southwest") { newFormData = { room: { sw: result.id } } }
        if (options["direction"] == "west") { newFormData = { room: { w: result.id } } }
        if (options["direction"] == "northwest") { newFormData = { room: { nw: result.id } } }
        if (options["direction"] == "up") { newFormData = { room: { u: result.id } } }
        if (options["direction"] == "down") { newFormData = { room: { d: result.id } } }
        $.ajax({
          data: newFormData,
          url: room_path,
          type: "PATCH",
          dataType: "json"
        });
      }.bind(this)); 
    }
  });
};

function generateNewRoom(options) {
  var addTheNewRoom = addNewRoom;
	var direction = options["direction"];
	var room_origin = options["source_room"];
  var coodinates = options["coordinates"];
  var x = coordinates[0];
  var y = coordinates[1];
  var z = coordinates[2];
  var get_path = '/random_room/' + x + '/' + y + '/' + z + '.json'
  $.get(get_path, function(results) {
    var new_name_string = results.name;
    var new_description = results.description;
    var post_data = { name: "name", description: 'description', u: 1 }
    if (direction == "north") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, s: room_origin } }
    if (direction == "northeast") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, sw: room_origin } }
    if (direction == "east") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, w: room_origin } }
    if (direction == "southeast") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, nw: room_origin } }
    if (direction == "south") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, n: room_origin } }
    if (direction == "southwest") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, ne: room_origin } }
    if (direction == "west") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, e: room_origin } }
    if (direction == "northwest") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, se: room_origin } }
    if (direction == "up") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, d: room_origin } }
    if (direction == "down") { post_data = { x: x, y: y, z: z, name: new_name_string, description: new_description, u: room_origin } }
    addNewRoom({post_data: post_data, room_origin: room_origin, direction: direction});
  }); 

};

function randomUnusedExit(exit_array) {
  var chosen_direction = "down";
  var direction_unused = true;
  var loop_again = true;
  while (loop_again == true) {
    chosen_direction = directionArray[Math.floor(Math.random()*directionArray.length)];
    exit_array.map(function (exit) {
      if (exit.name == chosen_direction) { direction_unused = false }
    });
    if (direction_unused = true) { return(chosen_direction) } else { loopagain = false };
  }
};

