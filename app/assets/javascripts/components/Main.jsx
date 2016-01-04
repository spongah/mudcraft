
var Main = React.createClass ({
	getInitialState: function () {
		this.loadRoom(this.props.initial_room_path);
		return { 
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
			generateNewRoom({direction: direction, source_room: room_id});
		  $.get("/lastroom.json", function(result) {
		    this.loadRoom("/rooms/" + result.id + ".json");
		  }.bind(this)); 
		  newsArray.unshift({type: 'movement', msg: timeStamp() + 'You dig ' + direction + '!'});
		}
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