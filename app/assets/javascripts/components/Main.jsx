
var Main = React.createClass ({
	getInitialState: function () {
		this.loadRoom(this.props.initial_room_path);
		return { 
			x: 0, y: 0, z: 0,
			room_id: 1,
			room_name: 'Limbo',
			room_description: 'Whoa, no state was loaded',
			room_exits: [	{name: 'up', path: 'fake/1.json'}, {name: 'down', path: 'fake/2.json'} ],
			news_list: 	[	{type: 'misc', msg: 'fake news1'}, 
										{type: 'damage', msg: 'fake news2'}
									]
		}
	},

	componentDidMount: function() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 2000ms";
      elem.style.opacity = 1;
    });
	},

	loadRoom: function(path) {
		$.get(path, function(result) {
    	var exit_array = makeExitArray(result);
      if (this.isMounted()) {
      	this.setState({
      		x: result.x, y: result.y, z: result.z,
      		room_id: result.id,
      		room_name: result.name,
      		room_description: result.description,
      		room_exits: exit_array,
      		news_list: newsArray
      	});
      }
    }.bind(this));	
	},

	loadLastRoom: function() {
		$.get("/lastroom.json", function(result) {
    	var exit_array = makeExitArray(result);
      	this.setState({
      		x: result.x, y: result.y, z: result.z,
      		room_id: result.id,
      		room_name: result.name,
      		room_description: result.description,
      		room_exits: exit_array,
      		news_list: newsArray
      	});
    }.bind(this));	
	},

	updateNews: function() {
		this.setState({
			news_list: newsArray
		});		
	},

	moveDirection: function (direction, exits_array) {
		exit_exists = false;
		exits_array.map(function(exit, i) {
			if (exit.name == direction) {
				exit_exists = true;
				document.getElementById(direction).click();
			}
		});
		return ( exit_exists );
	},

	commandFocus: function() {
		document.getElementById("commandBox").focus();
	},


// MAIN COMMAND HANDLERS

	handleClick: function (e) {
		e.preventDefault();
		if (isADirection(e.target.id)) {
			newsArray.unshift({type: 'movement', msg: timeStamp() + 'You exit the room heading ' + e.target.id + '.'});
 		}
 		this.loadRoom(e.target.href);
    document.getElementById("commandBox").focus();
	},

	digDirection: function (direction, room_id, room_exits) {
		var direction_already_exists = false;
		room_exits.map(function (exit) {
			if (exit.name == direction) { direction_already_exists = true; newsArray.unshift({type: 'misc', msg: timeStamp() + 'There is already an exit in that direction!'}); }
		});
		if (!direction_already_exists) {
		var already_exists = false;
		var this_x = this.state.x;
		var this_y = this.state.y;
		var this_z = this.state.z;
		var new_x = this_x;
		var new_y = this_y;
		var new_z = this_z;
		var loadFromResult = this.loadFromResult
		if ((direction == "northwest") || (direction == "north") || (direction == "northeast")) { new_y += 1 }
		if ((direction == "northeast") || (direction == "east") || (direction == "southeast")) { new_x += 1 }
		if ((direction == "southeast") || (direction == "south") || (direction == "southwest")) { new_y -= 1 }
		if ((direction == "northwest") || (direction == "west") || (direction == "southwest")) { new_x -= 1 }
		if (direction == "up") { new_z += 1 }
		if (direction == "down") { new_z -= 1 }

		var coordinate_path = "/rooms/" + new_x + "/" + new_y + "/" + new_z + ".json";

		$.get(coordinate_path)
			.success(function(result) {
				if (result != "") {
					var target_room_name = result.name;
					var target_room = result.id;
					var newFormData = {};
					var this_room_path = "/rooms/" + room_id + ".json"
					var target_room_path = "/rooms/" + target_room + ".json"

					console.log('ROOM FOUND TO THE ' + direction.toUpperCase());

					if (direction == "north") { newFormData = { room: { n: target_room } } }
					if (direction == "northeast") { newFormData = { room: { ne: target_room } } }
					if (direction == "east") { newFormData = { room: { e: target_room } } }
					if (direction == "southeast") { newFormData = { room: { se: target_room } } }
					if (direction == "south") { newFormData = { room: { s: target_room } } }
					if (direction == "southwest") { newFormData = { room: { sw: target_room } } }
					if (direction == "west") { newFormData = { room: { w: target_room } } }
					if (direction == "northwest") { newFormData = { room: { nw: target_room } } }
					if (direction == "up") { newFormData = { room: { u: target_room } } }
					if (direction == "down") { newFormData = { room: { d: target_room } } }

	        $.ajax({					// update this room
	          data: newFormData,
	          url: this_room_path,
	          type: "PATCH",
	          dataType: "json"
	        });

					if (direction == "north") { newFormData = { room: { s: room_id } } }
					if (direction == "northeast") { newFormData = { room: { sw: room_id } } }
					if (direction == "east") { newFormData = { room: { w: room_id } } }
					if (direction == "southeast") { newFormData = { room: { nw: room_id } } }
					if (direction == "south") { newFormData = { room: { n: room_id } } }
					if (direction == "southwest") { newFormData = { room: { ne: room_id } } }
					if (direction == "west") { newFormData = { room: { e: room_id } } }
					if (direction == "northwest") { newFormData = { room: { se: room_id } } }
					if (direction == "up") { newFormData = { room: { d: room_id } } }
					if (direction == "down") { newFormData = { room: { u: room_id } } }

	        $.ajax({					// update target room
	          data: newFormData,
	          url: target_room_path,
	          type: "PATCH",
	          dataType: "json"
	        });

	      	$.get(target_room_path, loadFromResult); 
	      	newsArray.unshift({type: 'movement', msg: timeStamp() + 'You dig ' + direction + ' into ' + target_room_name + "!"});
	      } else {
					coordinates = [new_x, new_y, new_z];
				  var addTheNewRoom = addNewRoom;
					var room_origin = room_id
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

					  var room_path = "/rooms/" + room_origin + ".json"
						formData = { room: post_data }
					  $.ajax({
					    data: formData,
					    url: "/rooms.json",
					    type: "POST",
					    dataType: "json",
					    success: function() {
					      $.get("/lastroom.json", function(result) {
					        var newFormData;
					        if (direction == "north") { newFormData = { room: { n: result.id } } }
					        if (direction == "northeast") { newFormData = { room: { ne: result.id } } }
					        if (direction == "east") { newFormData = { room: { e: result.id } } }
					        if (direction == "southeast") { newFormData = { room: { se: result.id } } }
					        if (direction == "south") { newFormData = { room: { s: result.id } } }
					        if (direction == "southwest") { newFormData = { room: { sw: result.id } } }
					        if (direction == "west") { newFormData = { room: { w: result.id } } }
					        if (direction == "northwest") { newFormData = { room: { nw: result.id } } }
					        if (direction == "up") { newFormData = { room: { u: result.id } } }
					        if (direction == "down") { newFormData = { room: { d: result.id } } }
					        $.ajax({
					          data: newFormData,
					          url: room_path,
					          type: "PATCH",
					          dataType: "json",
					          success: function() {
					          		$.get("/lastroom.json", loadFromResult); 
					          }
					        });
					      }.bind(this)); 
					    }
					  });
				  }); 
				  
				  newsArray.unshift({type: 'movement', msg: timeStamp() + 'You dig ' + direction + '!'});
				};
			});
		}
	},

	loadFromResult: function (result) {
		this.loadRoom("/rooms/" + result.id + ".json");
	},

	commandSubmit: function (e) {
		var room_exits = this.state.room_exits;
		var commandEntered = (document.getElementById("commandBox").value).toLowerCase().trim();
		var exit_exists = false;
		var moveMe = this.moveDirection;
		var room_id = this.state.room_id;
		var room_path = '/rooms/' + room_id + '.json'
		e.preventDefault();
		command = convertShorthandMovements(commandEntered);
		newsArray = this.state.news_list.slice(0, 10);
		if (command) {
			if (isADirection(command)) {
				directionArray.map(function (direction) {
					if (command == direction) { exit_exists = moveMe(direction, room_exits) }
				});
				if (!exit_exists) {
						newsArray.unshift({type: 'misc', msg: timeStamp() + 'There is no exit to the ' + command + '!'});
				}
			} else if (command == "wtf") {
				newsArray.unshift({type: 'misc', msg: timeStamp() + 'Right! What the fuck??'});
			} 

// PUT NEW COMMANDS HERE!

			else if (command == "dig north") { this.digDirection("north", room_id, room_exits) }
			else if (command == "dig northeast") { this.digDirection("northeast", room_id, room_exits) }
			else if (command == "dig east") { this.digDirection("east", room_id, room_exits) }
			else if (command == "dig southeast") { this.digDirection("southeast", room_id, room_exits) }
			else if (command == "dig south") { this.digDirection("south", room_id, room_exits) }
			else if (command == "dig southwest") { this.digDirection("southwest", room_id, room_exits) }
			else if (command == "dig west") { this.digDirection("west", room_id, room_exits) }
			else if (command == "dig northwest") { this.digDirection("northwest", room_id, room_exits) }
			else if (command == "dig up") { this.digDirection("up", room_id, room_exits) }
			else if (command == "dig down") { this.digDirection("down", room_id, room_exits) }
			else if (command == "dig random") { this.digDirection(randomUnusedExit(room_exits), room_id, room_exits) }



// END NEW COMMANDS HERE!

			else {
				newsArray.unshift({type: 'misc', msg: timeStamp() + '\"' + command + '\"' + ' is not a valid command.'});
			}
		}
		this.updateNews();
		document.getElementById("commandBox").value = "";
	},

// MAIN COMPONENT RENDER

	render: function () {
		return (
			<div className="col-md-8 col-md-offset-2">
				<div>
					<div className="col-xs-12">
						<div className="command" id="command">
								<Command onSubmit={this.commandSubmit} />
						</div>
				  </div>
					<div className="room">
							<Room 
								x={this.state.x}
								y={this.state.y}
								z={this.state.z}
								room_id={this.state.room_id} 
								room_name={this.state.room_name} 
								room_description={this.state.room_description} 
								exits={this.state.room_exits} 
								onClick={this.handleClick}>
							</Room>
					</div>
					<div className="space"></div>
					<div className="newsfeed">
						<Newsfeed news={this.state.news_list}/>
					</div>
				</div>
			</div>
		);
	}
});